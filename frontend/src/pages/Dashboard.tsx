import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
// import Events from '../Components/EventsList';
import EventForm from '../Components/EventForm';
import Profile from '../Components/Profile';
import EventsList from '../Components/EventsList';

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function Dashboard() {

    return (
        <div>
            <Navbar />

            <div className=' pt-[5%] mx-[10%] px-5'>
                {/* <EventsList /> */}
                <EventForm/>
                {/* <Profile/> */}
            </div>

        </div>
    );
}

export default Dashboard;