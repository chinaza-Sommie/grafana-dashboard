import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { api, type User, type VendorServices, type Event } from '../api';

// Define a TypeScript interface for our API response
interface EventFormProp {
  user: User | null;
  onPageToggle: (setActivePage: string) => void;
  eventToEdit: Event | null;
  onSetEventToEdit: (eventToEdit: Event | null) => void;
}

function AddEvent({user, onPageToggle, eventToEdit, onSetEventToEdit}: EventFormProp) {
    const navigate = useNavigate();
    const[eventFormComplete, seteventFormComplete] = useState<boolean>(false);
    const[allVendorServices, setAllVendorServices] = useState<VendorServices[]>([]);
    const[eventData, setEventData] = useState<Event | null>(null);
    const[name, setname] = useState<string>('');
    const[eventType, seteventType] = useState<string>('');
    const[city, setCity] = useState<string>('');
    const[guestCount, setGuestCount] = useState<number>(0);
    const[status, setStatus] = useState<string>('pending')
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
        const getEventToUpdate = () => {
            if(eventToEdit == null){
                return;
            }

            console.log(eventToEdit);
            setname(eventToEdit.name);
            seteventType(eventToEdit.eventType);
            setGuestCount(eventToEdit.guestCount);
            setStatus(eventToEdit.status);
            setStartDateTime(eventToEdit.startDateTime.slice(0, 16));
            setEndDateTime(eventToEdit.endDateTime.slice(0, 16));
            console.log(eventToEdit.name);
        }
        
        getEventToUpdate();
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
            status
        };
        const createEventData = await api.addEvent(eventData);
        console.log("Event created successfully");
        if(!createEventData){
            // console.log("something went wrong");
            return;
        }
        seteventFormComplete(true);
        setEventData(createEventData);

    }

    const findServiceById = (serviceId: string)=> {
       const getService = allVendorServices.find(service => service.serviceId === Number(serviceId));
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
            
        }
        console.log("service created successfully");
        seteventFormComplete(false);
        setError("booking created successfully");
        onPageToggle('events');

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

    const handleUpdateEvent = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(eventToEdit === null){
            return;
        }
        console.log("handle update button")
        const updateData = {name, eventType, city, guestCount, 
            startDateTime: new Date(startDateTime).toISOString(),
            endDateTime: new Date(endDateTime).toISOString(),
            user,
            totalAmount,
            status}
        
        const updateEvent = await api.updateEvent(eventToEdit.eventId , updateData);
        console.log(updateEvent);
        onPageToggle('events');
        onSetEventToEdit(null);
    }
    
    return (
        <div className='mx-[15%] lg:mx-[30%]'>
            <p className=' mb-4 px-5 text-[#29A699] font-bold hover:cursor-pointer hover:underline' onClick={() => {onPageToggle('events') ; onSetEventToEdit(null)}}> ← Back to Dashboard </p>
            
            <div className='bg-[#042642] text-white py-[60px] px-[50px] bg-[#042642] rounded-lg shadow-xl/30 lg:px-[40px]'> 
                <h4> {!eventFormComplete ? 'Create Event': 'Lets Plan Your Event'}</h4>
                
                {error && (
                        <p className='text-[red] bg-[#ffa2a2] border border-2 border-[red] mb-5 py-3 rounded-lg text-center'>{error}</p>
                )}

                {
                    !eventFormComplete && (
                        <form className='' onSubmit={eventToEdit === null ? createEvent : handleUpdateEvent}>
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
                            
                            {/* <input type='submit' value={'Create Event'} name='Submit' className='rounded-lg mt-5 bg-[#29A699] border border-[#29A699] hover:cursor-pointer hover:bg-[#198c80]
                    transition delay-150 duration-300 ease-in-out'/> */}
                            <button type='submit' value={'Create Event'}  name='Submit' className='rounded-lg mt-5 bg-[#29A699] border border-[#29A699] hover:cursor-pointer hover:bg-[#198c80]
                    transition delay-150 duration-300 ease-in-out' > Create Event </button>
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

                            <div className='flex justify-end mb-5 text-[20px]'>
                                { totalAmount != 0 && (
                                    <b> Total: {totalAmount.toLocaleString()} </b>
                                )}
                            </div> 

                            {/* <input type='submit' value={'Submit Planned Event'} name='Submit' className='rounded'/> */}
                            <button type='submit' value={'Submit Planned Event'}  name='Submit' className='rounded-lg mt-5 bg-[#29A699] border border-[#29A699] hover:cursor-pointer hover:bg-[#198c80]
                    transition delay-150 duration-300 ease-in-out' > Submit Planned Event </button>
                        </form>
                    )
                }
            </div>
        </div>
    );
}

export default AddEvent;

