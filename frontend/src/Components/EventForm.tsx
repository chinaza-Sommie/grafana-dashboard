import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { api, type User, type VendorServices, type Event } from '../api';

// Define a TypeScript interface for our API response
interface EventFormProp {
  user: User | null;
}

function EventForm({user}: EventFormProp) {
    const navigate = useNavigate();
    const[eventFormComplete, seteventFormComplete] = useState<boolean>(false);
    const[allVendorServices, setAllVendorServices] = useState<VendorServices[]>([]);
    const[eventData, setEventData] = useState<Event | null>(null);
    const[name, setname] = useState<string>('');
    const[eventType, seteventType] = useState<string>('');
    const[city, setCity] = useState<string>('');
    const[guestCount, setGuestCount] = useState<number>(0);
    const[startDateTime, setStartDateTime] = useState<string>('');
    const[endDateTime, setEndDateTime] = useState<string>('');
    const[venue, setVenue] = useState<string>('');
    const[totalAmount, setTotalAmount] = useState<number>(0);
    // const[customVenue, setCustomVenue] = useState<string>('');
    const [foodAndDrinks, setFoodAndDrinks] = useState<string>('');
    const [entertainment, setEntertainment] = useState<string>('');
    const[error, setError] = useState<string | null>(null);
    const categories = [venue, foodAndDrinks ,entertainment]
    // console.log(userId);

    if(user === null){
        return;
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const getAllCategories = await api.getAllCategories();
            // console.log(getAllCategories.length);
        }

        const fetchAllVendorServices = async () => {
            const getAllVendorServices = await api.getAllVendorServices();
            setAllVendorServices(getAllVendorServices);
            return getAllVendorServices;
        }
        
        fetchCategories();
        fetchAllVendorServices();
    }, [user]);

    const createEvent = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTotalAmount(0);
        if(!name.trim() || !eventType.trim() || !city.trim() || guestCount <= 0  ){

            return setError("All feilds are required. Please, try again.")
        }

        if(startDateTime && endDateTime){
            const currentDate = new Date();
            const start = new Date(startDateTime);
            const end = new Date(endDateTime);

            if(start <= currentDate){
                return setError("Start date must be after today")
            }

            if(end <= start){
                return setError("End date must be after the start date and time")
            }
        }
        // const userId = user;
        setError(null);
        const eventData = { name, eventType, city, guestCount, 
            startDateTime: new Date(startDateTime).toISOString(),
            endDateTime: new Date(endDateTime).toISOString(),
            user,
            totalAmount,
            status: "preparing"
        };
        const createEventData = await api.addEvent(eventData);
        console.log("Event created successfully");
        if(!createEventData){
            console.log("something went wrong");
            return;
        }
        console.log(createEventData);
        seteventFormComplete(true);
        setEventData(createEventData);

    }

    const findServiceById = (serviceId: string)=> {
       const getService = allVendorServices.find(service => service.serviceId === Number(serviceId));
       console.log(getService);
       return getService;
    }

    const handlePlanEvent = async (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();
        if(!venue || !foodAndDrinks || !entertainment ){

            return setError("All fields are required. Please, try again.")
        }

        if(!eventData){
            return setError("Event has not been created yet");
        }

        const agreedPrice = "40";
        setError(null);

        for(let i = 0; i < categories.length; i++){
            const bookingData = { agreedPrice, bookingstatus: "pending", serviceId: findServiceById(categories[i]) , eventId: eventData}
            await api.addVendorBooking(bookingData);
            console.log("service created successfully");
        }

    }

    const filterServiceByCategory = (category: string) => {
        const filterResult = allVendorServices.filter(service => 
            service.serviceCategoryId.categoryName.toLocaleLowerCase() === category.toLocaleLowerCase() );
        
            return filterResult;
    }
    // console.log(filterServiceByCategory("venue"));
    useEffect(() => {
        let count = 0;

        for(let i = 0; i < categories.length; i++){
            const service = findServiceById(categories[i]);

            if(service){
                count += service.basePrice;
            }
        }
        setTotalAmount(count);
        
    }, [venue, foodAndDrinks, entertainment, allVendorServices, categories])
    
    return (
        <div className='mx-[30%]'>
            <p className='text-[14px] mb-4'> ← Back to Dashboard </p>
            <h4> {!eventFormComplete ? 'Create Event': 'Lets Plan Your Event'}</h4>
            
            {error && (
                    <p className='text-[red] mb-5'>{error}</p>
            )}

            {
                !eventFormComplete && (
                    <form onSubmit={createEvent}>
                        <input type='text' placeholder='Enter Event Name'
                        className='rounded'
                        value={name}
                        onChange={(e) => setname(e.target.value)}/>

                        <input type='text' placeholder='Enter eventType'
                        className='rounded'
                        value={eventType}
                        onChange={(e) => seteventType(e.target.value)}/>

                        {/* use below to search by location */}
                        <div className="grid grid-cols-2 gap-3">
                            <input type='text'
                            placeholder='Enter Event City'
                            className='rounded'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}/>

                            <input type='number'
                            placeholder='Enter Guest Count'
                            className='rounded'
                            value={guestCount}
                            onChange={(e) => setGuestCount(Number(e.target.value))} />
                        </div>
                        <div className="grid grid-cols-2 gap-3 my-5">
                            <div>
                                  <label className="block mb-2">Start Date & Time</label>
                                 <input
                                 type="datetime-local"
                                 name="startDateTime"
                                    className="w-full p-3 border border-black rounded"
                                    value={startDateTime}
                                    onChange={(e) => setStartDateTime(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block mb-2">End Date & Time</label>
                                <input
                                    type="datetime-local"
                                    name="endDateTime"
                                    className="w-full p-3 border border-black rounded"
                                    value={endDateTime}
                                    onChange={(e) => setEndDateTime(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <input type='submit' value={'Create Event'} name='Submit' className='rounded'/>
                    </form>
                )
            }

            {
                eventFormComplete && (
                    <form onSubmit={handlePlanEvent}>
                        <select
                            value={venue}
                            onChange={(e) => setVenue(e.target.value)}
                            required={true}>
                            <option value="">Select Venue</option>
                            {filterServiceByCategory("venue").map((service) => (
                                <option key={service.serviceId} value={service.serviceId} >{service.name} -  £{service.basePrice}</option>
                            ))
                            }
                        </select>
                        <select
                            value={foodAndDrinks}
                            onChange={(e) =>setFoodAndDrinks(e.target.value)}
                            required={true}>
                            <option value="">Select food and Drinks</option>
                            {filterServiceByCategory("food and drinks").map((service) => (
                                <option key={service.serviceId} value={service.serviceId}>{service.name} -  £{service.basePrice}</option>
                            ))
                            }
                        </select>

                        <select
                            value={entertainment}
                            onChange={(e) => setEntertainment(e.target.value)}
                            required={true}>
                            <option value="">Select food and Drinks</option>
                            {filterServiceByCategory("entertainment").map((service) => (
                                <option key={service.serviceId} value={service.serviceId}>{service.name} -  £{service.basePrice}</option>
                            ))
                            }
                        </select>

                        { venue && (
                            
                            <div className='flex justify-between border'>
                                <div> Venue name</div>
                                <div> vendor name</div>
                                <div> price name</div>
                            </div>
                        )}
                        <div className='flex justify-end mb-5'>
                            { totalAmount && (
                                <b> Total: {totalAmount} </b>
                            )}
                        </div> 

                        <input type='submit' value={'Submit Planned Event'} name='Submit' className='rounded'/>
                    </form>
                )
            }
        </div>
    );
}

export default EventForm;

