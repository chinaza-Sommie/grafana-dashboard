import { useEffect, useState } from 'react';
import type { Event } from '../api';

// Define a TypeScript interface for our API response
interface NavBarProp {
    loginUser: string;
    onPageToggle: (setActivePage: string) => void;
    onSetEventToEdit: (eventToEdit: Event | null) => void;
}

function Navbar({onPageToggle, loginUser, onSetEventToEdit}: NavBarProp) {
    // if()
    return (
        <>
            <div className='bg-[black] text-white py-5 px-10 text-[20px]'> Event Planner </div>
            <div className='flex items-center justify-between bg-[grey] text-white py-3 px-10 text-[18px]'>
                <div>Welcome, {loginUser}</div>
                <div className='flex gap-3 text-[16px]'> 
                    <div onClick={() => {onSetEventToEdit(null); onPageToggle('addEvent')}}> Add Events </div>
                    <div onClick={() => {onSetEventToEdit(null); onPageToggle('profile')}}> Profile </div>
                </div>
            </div>


        </>
    );
}

export default Navbar;