// import { useEffect, useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Events from './EventsList';
// import EventForm from './AddEvent';
import ProfileImg from '../assets/user_profile_img.png';
import type { User } from '../api';

// Define a TypeScript interface for our API response
interface ProfileProp {
  loginUser: User | null;
  onPageToggle: (setActivePage: string) => void;
}

function Profile({loginUser, onPageToggle}: ProfileProp) {
    
    return (
        <div className='mx-[15%] lg:mx-[30%]'>
            <p className='mb-4 px-5 text-[#29A699] font-bold hover:cursor-pointer hover:underline' onClick={() =>onPageToggle('events')}> ← Back to Dashboard </p>
            <div className='grid grid-cols-2 bg-[#042642] text-white py-[60px] px-[50px] bg-[#042642] rounded-lg shadow-xl/30 lg:px-[40px]'> 
                
                <div>
                    <img src={ProfileImg} />
                </div>

                <div className='pt-[15%]'>
                    <h4> Profile </h4>

                    <div className=''>
                        <p><b> First Name:</b> <i>{loginUser?.firstName}</i> </p>
                        <p><b> Last Name:</b> <i>{loginUser?.lastName}</i> </p>
                        <p><b> Email: </b> <i> {loginUser?.email}</i> </p>
                        {/* <p> Date Joined: <i>{loginUser.createdBy}</i> </p> */}

                    </div>
                </div>

        
            </div>
        </div>
    );
}

export default Profile;