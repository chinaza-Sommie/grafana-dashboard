import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Events from './EventsList';
import EventForm from '../Components/EventForm';

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function Profile() {
    const[firstname, setFirstname] = useState<string>('');
    const[lastname, setLastname] = useState<string>('');
    const[email,setEmail] = useState<string>('');
    const[password,setPasword] = useState<string>('');
    const[confirmPassword,setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const update = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(firstname === null || lastname === null || email === null || password === null || confirmPassword === null ||
            firstname === "" || lastname === "" || email === "" || password === "" || confirmPassword === ""
        ){
            return setError("Please, enter the correct details");
        }

        if(password != confirmPassword){
            return setError("Passwords do not match. Please, try again");
        }

        setError(null);
        console.log(firstname);
    }
    
    return (
        <div className='mx-[30%]'>
            <p className='text-[14px] mb-4'> ← Back </p>
            <h4> Profile </h4>

            <form onSubmit={update} >
                <input type='text' placeholder='Enter Firstname' value={'Chinaza'} className='rounded'/>
                <input type='text' placeholder='Enter Lastname' value={'C'} className='rounded' />
                <input type='text' placeholder='Enter Lastname' value={'chizy@gmail.com'} className='rounded' />
                <input type='password' placeholder='Enter Lastname' value={'chinaza'} className='rounded' />
                <input type='submit' value={'Update Profile'} name='Submit' className='rounded'/>
            </form>
        </div>
    );
}

export default Profile;