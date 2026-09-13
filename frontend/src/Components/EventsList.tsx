import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import EventCard from './EventCard';
import { api, type Event, type User } from '../api';

// Define a TypeScript interface for our API response
interface EventListProp {
    user: User;
    activePage: string;
    onPageToggle: (activePage: string)=> void;
    onSetEventToEdit: (eventToEdit: Event) => void;
}

function EventsList({user, onPageToggle, activePage, onSetEventToEdit}: EventListProp) {
    const[usersEvents, setUsersEvents] = useState<Event[]>([]);
    
    // if(!usersEvents){
    //     console.log(undefined);
    // }
    const fetchEvents = async (userId: number) => {
            const getUsersEvents = await api.getEventsByUsersId(userId);
            setUsersEvents(getUsersEvents);
    }

    const handleUpdateEvents = async (event: Event) => {
        onSetEventToEdit(event);
        onPageToggle('addEvent');
    }

    useEffect(() => {
        fetchEvents(user.userId)
    }, []);

    const handleDelete = async (eventId: number) => {
        await api.removeEventById(eventId);
        // onFetchEvents(user.userId);
        fetchEvents(user.userId);
    }
    
    

    return (
        <>
            <div className='flex justify-end'>
                <button className='bg-[#29A699] button mb-5 text-white hover:cursor-pointer hover:text-[#042642] transition delay-150 duration-300 ease-in-out rounded-md' onClick={() => onPageToggle('addEvent')}> + Add Event </button>
            </div>
            <div className='grid grid-cols-4 gap-8'>
                {
                    usersEvents.map((event) => (
                        <EventCard key={event.eventId} eventData={event} onDelete={handleDelete} onHandleUpdate={handleUpdateEvents} />
                    ))
                }
                
            </div>
        </>
    );
}

export default EventsList;

// import { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import EventCard from './EventCard';
// import { api, type Event, type User } from '../api';

// // Define a TypeScript interface for our API response
// interface EventListProp {
//   user: User;
//   activePage: string;
//   onPageToggle: (activePage: string)=> void;
//   usersEvents: Event;
//   onSetUsersEvents: (usersEvents: Event)=> void;
// }

// function EventsList({user, onPageToggle, activePage,usersEvents}: EventListProp) {
    

//     const handleDelete = async (eventId: number) => {
//         await api.removeEventById(eventId);
//         fetchEvents(user.userId);
//     }


//     return (
//         <>
//             <div className='flex justify-end'>
//                 <button className='button mb-5 hover:cursor-pointer' onClick={() => onPageToggle('addEvent')}> + Add Event </button>
//             </div>
//             <div className='grid grid-cols-4 gap-8'>
//                 {
//                     usersEvents.map((event) => (
//                         <EventCard key={event.eventId} eventData={event} onDelete={handleDelete} />
//                     ))
//                 }
                
//             </div>
//         </>
//     );
// }

// export default EventsList;