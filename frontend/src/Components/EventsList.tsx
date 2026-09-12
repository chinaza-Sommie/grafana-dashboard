import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import EventCard from './EventCard';
import { api, type Event, type User } from '../api';

// Define a TypeScript interface for our API response
interface EventListProp {
  user: User;
}

function EventsList({user}: EventListProp) {
    const[usersEvents, setUsersEvents] = useState<Event[]>([]);
    
    if(!usersEvents){
        console.log(undefined);
    }
    const fetchEvents = async (userId: number) => {
            console.log(user?.userId);
            const getUsersEvents = await api.getEventsByUsersId(userId);
            setUsersEvents(getUsersEvents);
    }

    useEffect(() => {
        fetchEvents(user.userId)
    }, []);

    const handleDelete = async (eventId: number) => {
        await api.removeEventById(eventId);
        fetchEvents(user.userId);
    }


    return (
        <>
            <div className='flex justify-end'>
                <button className='button mb-5 hover:cursor-pointer'> + Add Event </button>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                {
                    usersEvents.map((event) => (
                        <EventCard key={event.eventId} eventData={event} onDelete={handleDelete} />
                    ))
                }
                
            </div>
        </>
    );
}

export default EventsList;