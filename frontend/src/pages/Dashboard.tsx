import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import AddEvent from '../Components/AddEvent';
import Profile from '../Components/Profile';
import EventsList from '../Components/EventsList';
import { api, type Event, type User } from '../api';
import { useNavigate } from 'react-router-dom';

// Define a TypeScript interface for our API response
interface DashboardProp {
  loginUser: User | null;
  onSetLoginUser: (loginUser: User | null) => void;
}

function Dashboard({loginUser, onSetLoginUser} : DashboardProp) {
    const navigate = useNavigate();
    const[activePage, setActivePage] = useState('events');
    const[eventToEdit, setEventToEdit] = useState<Event | null>(null);
    // const navigate = useNavigate();

    const logout = () => {
        // onSetLoginUser(null);
        localStorage.removeItem('loginUser');
        navigate("/")
        return;
    }
    useEffect(() => {
        if(loginUser === null ){
            navigate("/");
        }
    }, [loginUser, navigate]);

    if(loginUser === null){
        return null;
    }

    
    return (
        <div>
            <Navbar onPageToggle={setActivePage} loginUser={loginUser.firstName} onSetEventToEdit={setEventToEdit}
             onLogout={logout} />

            <div className=' pt-[5%] mx-[10%] px-5'>
                { activePage === 'events' && (
                    <EventsList user={loginUser} onPageToggle={setActivePage} activePage={activePage} onSetEventToEdit={setEventToEdit}
                     />
                )}

                { activePage === 'addEvent' && (
                    <AddEvent user={loginUser} onPageToggle={setActivePage} eventToEdit={eventToEdit} onSetEventToEdit={setEventToEdit}  />
                )}

                {activePage === 'profile' && (
                    <Profile loginUser={loginUser} onPageToggle={setActivePage}    />
                )}
            </div>

        </div>
    );
}

export default Dashboard;