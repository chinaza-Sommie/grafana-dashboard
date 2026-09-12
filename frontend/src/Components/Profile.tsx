import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Events from './EventsList';
import EventForm from './AddEvent';
import type { User } from '../api';

// Define a TypeScript interface for our API response
interface ProfileProp {
  loginUser: User | null;
  onPageToggle: (setActivePage: string) => void;
}

function Profile({loginUser, onPageToggle}: ProfileProp) {
    
    return (
        <div className='mx-[30%]'>
            <p className='text-[14px] mb-4' onClick={() => onPageToggle('addEvent')}> ← Back to Dashboard </p>
            <h4> Profile </h4>

            <div>
                <p> First Name: <i>{loginUser?.firstName}</i> </p>
                <p> Last Name: <i>{loginUser?.lastName}</i> </p>
                <p> Email: <i> {loginUser?.email}</i> </p>
                {/* <p> Date Joined: <i>{loginUser.createdBy}</i> </p> */}

            </div>
        </div>
    );
}

export default Profile;