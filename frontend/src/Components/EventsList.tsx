import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import EventCard from './EventCard';

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function EventsList() {

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