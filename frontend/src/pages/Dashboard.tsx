import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import AddEvent from '../Components/AddEvent';
import Profile from '../Components/Profile';
import EventsList from '../Components/EventsList';
import { api, type Event, type User } from '../api';

// Define a TypeScript interface for our API response
interface DashboardProp {
  loginUser: User | null;
}

function Dashboard({loginUser} : DashboardProp) {
    const[activePage, setActivePage] = useState('events');
    const[eventToEdit, setEventToEdit] = useState<Event | null>(null);
    // const navigate = useNavigate();

    if(loginUser?.userId === undefined ){
        // setError("You must login");
        // navigate('/');
        return null;
    }

    
    return (
        <div>
            <Navbar onPageToggle={setActivePage} loginUser={loginUser.firstName} onSetEventToEdit={setEventToEdit} />

            <div className=' pt-[5%] mx-[10%] px-5'>
                { activePage === 'events' && (
                    <EventsList user={loginUser} onPageToggle={setActivePage} activePage={activePage} onSetEventToEdit={setEventToEdit}
                     />
                )}

                { activePage === 'addEvent' && (
                    <AddEvent user={loginUser} onPageToggle={setActivePage} eventToEdit={eventToEdit} onSetEventToEdit={setEventToEdit}  />
                )}

                {activePage === 'profile' && (
                    <Profile loginUser={loginUser} onPageToggle={setActivePage}   />
                )}
            </div>

        </div>
    );
}

export default Dashboard;