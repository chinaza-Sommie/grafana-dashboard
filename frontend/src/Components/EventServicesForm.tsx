
import { useEffect, useState } from 'react';
import { api, type Event, type User, type VendorServices } from '../api';
import ServiceSelect from './ServicesSelect';

// Define a TypeScript interface for our API response
interface AddEventServicesProp {
  onPageToggle: (setActivePage: string) => void;
  onSetError: (error: string| null) => void;
  onSetEventForm: (seteventFormComplete: boolean) => void;
  onSetTotalAmount: (totalAmount: number) => void;
  eventData: Event | null;
  totalAmount: number;
}

function EventServicesForm({onPageToggle, onSetError, onSetEventForm, onSetTotalAmount, eventData, totalAmount}: AddEventServicesProp) {
    const[venue, setVenue] = useState<string>('');
    const [foodAndDrinks, setFoodAndDrinks] = useState<string>('');
    const [entertainment, setEntertainment] = useState<string>('');
    const categories = [venue, foodAndDrinks ,entertainment];
    const[allVendorServices, setAllVendorServices] = useState<VendorServices[]>([]);

    const handlePlanEvent = async (e: React.SubmitEvent<HTMLFormElement>) => {
    
            e.preventDefault();
            if(!venue || !foodAndDrinks || !entertainment ){
    
                return onSetError("All fields are required. Please, try again.")
            }
    
            if(!eventData){
                return onSetError("Event has not been created yet");
            }
    
            const agreedPrice = "40";
            onSetError(null);
    
            for(let i = 0; i < categories.length; i++){
                const bookingData = { agreedPrice, bookingstatus: "pending", serviceId: findServiceById(categories[i]) , eventId: eventData}
                await api.addVendorBooking(bookingData);
                
            }
            console.log("service created successfully");
            onSetEventForm(false);
            // onSetError("booking created successfully");
            onPageToggle('events');
    
        }

    const filterServiceByCategory = (category: string) => {
        const filterResult = allVendorServices.filter(service => 
            service.serviceCategoryId.categoryName.toLocaleLowerCase() === category.toLocaleLowerCase() );
        
            return filterResult;
    }

    const findServiceById = (serviceId: string)=> {
       const getService = allVendorServices.find(service => service.serviceId === Number(serviceId));
       return getService;
    }

    useEffect(() => {
        let count = 0;

        for(let i = 0; i < categories.length; i++){
            const service = findServiceById(categories[i]);

            if(service){
                count += service.basePrice;
            }
        }
        onSetTotalAmount(count);

        const fetchAllVendorServices = async () => {
            const getAllVendorServices = await api.getAllVendorServices();
            setAllVendorServices(getAllVendorServices);
            return getAllVendorServices;
        }

        fetchAllVendorServices();
        
    }, [venue, foodAndDrinks, entertainment, allVendorServices, categories])
    return (
        <form onSubmit={handlePlanEvent}>

            <ServiceSelect value={venue} onChange={setVenue} placeholder="Select Venue" services={filterServiceByCategory("venue")}/>
            <ServiceSelect value={foodAndDrinks} onChange={setFoodAndDrinks} placeholder="Select Food and Drinks" services={filterServiceByCategory("food and drinks")} />
            <ServiceSelect value={entertainment} onChange={setEntertainment} placeholder="Select Entertainment" services={filterServiceByCategory("entertainment")}/>   
            
            <div className='flex justify-end mb-5 text-[20px]'>
                { totalAmount != 0 && (
                    <b> Total: {totalAmount.toLocaleString()} </b>
                )}
            </div> 

            <button type='submit' value={'Submit Planned Event'}  name='Submit' className='rounded-lg mt-5 bg-[#29A699] border border-[#29A699] hover:cursor-pointer hover:bg-[#198c80]
                transition delay-150 duration-300 ease-in-out' > Submit Planned Event </button>
        </form>
    );
}

export default EventServicesForm;