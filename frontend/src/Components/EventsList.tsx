import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import EventCard from './EventCard';
import type { User } from '../api';

// Define a TypeScript interface for our API response
interface EventListProp {
  user: User | null;
}

function EventsList({user}: EventListProp) {

    useEffect(() => {
        console.log(user?.userId);
        
    })
    return (
        <>
            <div className='flex justify-end'>
                <button className='button mb-5 hover:cursor-pointer'> + Add Event </button>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                <EventCard/>
                
            </div>
        </>
    );
}

export default EventsList;