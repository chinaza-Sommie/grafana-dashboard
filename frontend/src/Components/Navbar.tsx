import { useEffect, useState } from 'react';

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function Navbar() {

    return (
        <>
            <div className='bg-[black] text-white py-5 px-10 text-[20px]'> Event Planner </div>
            <div className='flex items-center justify-between bg-[grey] text-white py-3 px-10 text-[18px]'>
                <div>Welcome, Chinaza</div>
                <div className='flex gap-3 text-[16px]'> 
                    <div> Add Events </div>
                    <div> Profile </div>
                </div>
            </div>


        </>
    );
}

export default Navbar;