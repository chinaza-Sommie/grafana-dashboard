import { useEffect, useState } from 'react';
import { api, type User, type Event } from '../api';
import EventServicesForm from './EventServicesForm';
import EventDetailsForm from './EventDetailsForm';

// Define a TypeScript interface for our API response
interface EventFormProp {
  user: User | null;
  onPageToggle: (setActivePage: string) => void;
  eventToEdit: Event | null;
  onSetEventToEdit: (eventToEdit: Event | null) => void;
}

function AddEvent({user, onPageToggle, eventToEdit, onSetEventToEdit}: EventFormProp) {
    
    const[eventFormComplete, seteventFormComplete] = useState<boolean>(false);

    const[eventData, setEventData] = useState<Event | null>(null);
    
    const[name, setname] = useState<string>('');
    const[eventType, seteventType] = useState<string>('');
    const[city, setCity] = useState<string>('');
    const[guestCount, setGuestCount] = useState<number>(0);
    const[status, setStatus] = useState<string>('pending')
    const[startDateTime, setStartDateTime] = useState<string>('');
    const[endDateTime, setEndDateTime] = useState<string>('');

    const[totalAmount, setTotalAmount] = useState<number>(0);
    
    const[error, setError] = useState<string | null>(null);
    // console.log(userId);

    if(user === null){
        return;
    }

    useEffect(() => {
        const getEventToUpdate = () => {
            if(eventToEdit == null){
                return;
            }
            setname(eventToEdit.name);
            seteventType(eventToEdit.eventType);
            setGuestCount(eventToEdit.guestCount);
            setStatus(eventToEdit.status);
            setStartDateTime(eventToEdit.startDateTime.slice(0, 16));
            setEndDateTime(eventToEdit.endDateTime.slice(0, 16));
            console.log(eventToEdit.name);
        }     
        getEventToUpdate();
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
        setEventData(createEventData);
        onPageToggle('events');

    }
    
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
        <div className='mx-[15%] lg:mx-[20%]'>
            <p className=' mb-4 px-5 text-[#29A699] font-bold hover:cursor-pointer hover:underline' onClick={() => {onPageToggle('events') ; onSetEventToEdit(null)}}> ← Back to Dashboard </p>
            
            <div className='bg-[#042642] text-white py-[60px] px-[50px] bg-[#042642] rounded-lg shadow-xl/30 lg:px-[40px]'> 
                <h4> {!eventFormComplete ? 'Create Event': 'Lets Plan Your Event'}</h4>
                
                {error && (
                        <p className='text-[red] bg-[#ffa2a2] border border-2 border-[red] mb-5 py-3 rounded-lg text-center'>{error}</p>
                )}

                {
                    !eventFormComplete && (
                        
                        <EventDetailsForm onCreatEvent={createEvent} eventToEdit={eventToEdit} onHandleUpdateEvent={handleUpdateEvent}
                        name={name} onSetname={setname} city={city} onSetCity={setCity} eventType={eventType} onSeteventType={seteventType} guestCount={guestCount} onSetGuestCount={setGuestCount}
                        startDateTime={startDateTime} onSetStartDateTime={setStartDateTime} endDateTime={endDateTime} onSetEndDateTime={setEndDateTime}  />
                    )
                }

                {
                    eventFormComplete && (
                        <EventServicesForm onSetError={setError} onPageToggle={onPageToggle} onSetTotalAmount={setTotalAmount} onSetEventForm={seteventFormComplete}
                        eventData={eventData} totalAmount={totalAmount}  />
                    )
                }
            </div>
        </div>
    );
}

export default AddEvent;

