import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
// import Events from '../Components/EventsList';
import EventForm from '../Components/AddEvent';
import Profile from '../Components/Profile';
import EventsList from '../Components/EventsList';
import type { User } from '../api';
import { useNavigate } from 'react-router-dom';

// Define a TypeScript interface for our API response
interface DashboardProp {
  loginUser: User | null;
}

function Dashboard({loginUser} : DashboardProp) {
    const[activePage, setActivePage] = useState('events');
    const navigate = useNavigate();

    if(loginUser?.userId === undefined ){
        // setError("You must login");
        // navigate('/');
        return;
    }
    console.log(loginUser);
    return (
        <div>
            <Navbar onPageToggle={setActivePage} loginUser={loginUser.firstName} />

            <div className=' pt-[5%] mx-[10%] px-5'>
                { activePage === 'events' && (
                    <EventsList user={loginUser} onPageToggle={setActivePage} activePage={activePage} />
                )}

                { activePage === 'addEvent' && (
                    <EventForm user={loginUser} onPageToggle={setActivePage} />
                )}

                {activePage === 'profile' && (
                    <Profile loginUser={loginUser} onPageToggle={setActivePage} />
                )}
            </div>

        </div>
    );
}

export default Dashboard;