import { useEffect, useState } from 'react';
import { api, type User,} from '../api';
import { useNavigate } from 'react-router-dom';


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
            return setError("Please, enter the correct details");
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
                <div className='w-[30%] p-5 ' style={{border: "1px solid red"}}>
                    <h1> Register</h1>
                    <h4> Fill the form below</h4>
                    {error && (
                        <p className='text-[red] mb-5'>{error}</p>
                    )}
                    <form onSubmit={register}>
                        <input type='firstName' placeholder='Enter Your firstName' value={firstName} onChange={(e)=> setfirstName(e.target.value) }/>
                        <input type='lastName' placeholder='Enter Your lastName' value={lastName} onChange={(e)=> setlastName(e.target.value) } />
                        <input type='email' placeholder='Enter Your email' value={email} onChange={(e)=> setEmail(e.target.value) } />
                        <input type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPasword(e.target.value) } />
                        <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value) } />
                        <input type='submit' value={'Submit'} />
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Register;