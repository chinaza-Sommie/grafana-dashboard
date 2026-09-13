import { useEffect, useState } from 'react';
import { api, type User,} from '../api';
import { Link, useNavigate } from 'react-router-dom';


interface RegisterProp {
 onSetUser: (user: User) => void;
}

function Register({onSetUser}: RegisterProp) {
    const navigate = useNavigate();
    const[firstName, setfirstName] = useState<string>('');
    const[lastName, setlastName] = useState<string>('');
    const[email,setEmail] = useState<string>('');
    const[password,setPasword] = useState<string>('');
    const[confirmPassword,setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const register = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(firstName === null || lastName === null || email === null || password === null || confirmPassword === null ||
            firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === ""
        ){
            return setError("Fields cannot be empty. Please, try again.");
        }

        if(password != confirmPassword){
            return setError("Passwords do not match. Please, try again");
        }

        try{
            const userDetails = { firstName, lastName, email, password}
            const addUser = await api.addUser(userDetails);
            onSetUser(addUser);
            navigate('/login');
        }catch(err){
            //Add a specific error here
            // if(err instanceof Error){
            //     setError(err.message);
            // }else{
            setError("Something went wrong try again")
            // }
        }
    }

    return (
        <div>
            <div className='flex justify-center signin-reg-button mt-[10%] text-center'>
                
                <div className='w-[35%] py-[60px] px-[50px] bg-[#042642] rounded-lg shadow-xl/30 lg:w-[28%] lg:px-[40px] '>
                    <h1 className='text-white'> Register</h1>
                    <h4 className='text-[#29A699]'> Fill the form below</h4>
                    {error && (
                        <p className='text-[red] bg-[#ffa2a2] border border-2 border-[red] mb-5 py-3 rounded-lg'>{error}</p>
                    )}
                    <form onSubmit={register}>
                        <input type='firstName' placeholder='Enter Your firstName' value={firstName} onChange={(e)=> setfirstName(e.target.value) } className="w-full appearance-none rounded-lg border-2 border-white bg-transparent"/>
                        <input type='lastName' placeholder='Enter Your lastName' value={lastName} onChange={(e)=> setlastName(e.target.value) } className="w-full appearance-none rounded-lg border-2 border-white bg-transparent"/>
                        <input type='email' placeholder='Enter Your email' value={email} onChange={(e)=> setEmail(e.target.value) } className="w-full appearance-none rounded-lg border-2 border-white bg-transparent" />
                        <input type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPasword(e.target.value) } className="w-full appearance-none rounded-lg border-2 border-white bg-transparent"/>
                        <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value) } className="w-full appearance-none rounded-lg border-2 border-white bg-transparent"/>
                        <button type='submit' value={'Register'}  name='Submit' className='rounded-lg mt-5 bg-[#29A699] border border-[#29A699] hover:cursor-pointer hover:bg-[#198c80]
                    transition delay-150 duration-300 ease-in-out' > Create Event </button>
                    </form>
                    <p className='text-white'> Already have an account? <Link to='/' className='text-[#29A699] underline'> Login </Link> </p>
                </div>
            </div>
        </div>
  );
}

export default Register;