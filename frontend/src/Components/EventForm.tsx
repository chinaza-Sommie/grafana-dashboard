import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { api, type User } from '../api';

// Define a TypeScript interface for our API response
interface EventFormProp {
  userId: User | null;
}

function EventForm({userId}: EventFormProp) {
    const navigate = useNavigate();
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
    const categories = ["venues", "food and drinks","entertainment"]
    console.log(userId);

    if(userId === null){
        return;
    }
    const createEvent = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!name.trim() || !eventType.trim() || !city.trim() || guestCount <= 0 || !startDateTime || !endDateTime ||
        !venue || !foodAndDrinks || !entertainment ){

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
            userId,
            totalAmount,
            status: "preparing"
        };
        console.log(eventData);
        const createEventData = await api.addEvent(eventData);
        console.log(createEventData);
        console.log("Event created successfully");
        if(!createEventData){
            console.log("something went wrong");
            return;
        }
        // create vendor booking

        for(let i = 0; i < categories.length; i++){
            // const createVendorBooking = await api.
        }
    }
    
    return (
        <div className='mx-[30%]'>
            <h4> Create Event</h4>
            
            {error && (
                    <p className='text-[red] mb-5'>{error}</p>
            )}

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

                <select
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                required={true}>
                    <option value="">Select venue</option>
                    <option value="1">Birthday</option>
                    <option value="2">Wedding</option>
                    <option value="3">Anniversaries</option>
                    <option value="other">Other / Enter location</option>
                </select>
                {/* {venue === 'other' && (
                    <input
                        type="text"
                        placeholder="Enter event venue/location"
                        className="rounded"
                        value={customVenue}
                        onChange={(e) => setCustomVenue(e.target.value)}
                    />
                )} */}

                <select value={foodAndDrinks}
                    onChange={(e) => setFoodAndDrinks(e.target.value)}
                required={true} >
                    <option value=""> Select food and drinks </option>
                    <option value="1">Birthday</option>
                    <option value="2">Wedding</option>
                    <option value="3">Anniversaries</option>
                    <option value="other">Other / Enter location</option>
                </select>

                <select value={entertainment}
                    onChange={(e) => setEntertainment(e.target.value)}
                required={true}>
                    <option value="">Select Entertainment</option>
                    <option value="1">Birthday</option>
                    <option value="2">Wedding</option>
                    <option value="3">Anniversaries</option>
                </select>

                <div>

                </div>
                <div className='flex justify-end mb-5'>
                    <b> Total: £500</b>
                    {/* <b> Total: ${totalAmount}</b> */}
                </div>
                
                <input type='submit' value={'Create Event'} name='Submit' className='rounded'/>
            </form>
        </div>
    );
}

export default EventForm;