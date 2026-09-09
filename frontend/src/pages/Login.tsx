import { useEffect, useState } from 'react';
import { api, type User } from '../api';
import { useNavigate } from 'react-router-dom';

// Define a TypeScript interface for our API response
interface LoginUserProp {
  loginUser: User | null;
  onSetLoginUser: (loginUser: User) => void;
}

function Login({loginUser, onSetLoginUser}: LoginUserProp) {
    const navigate = useNavigate()
    const[email,setEmail] = useState<string>('');
    const[password,setPasword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const login = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(email === null || email === "" || password === null || password === ""){
            return setError("Please, enter correct details");
        }

        // if(password.length < 6 ){
        //     return setError("Password needs to be more than 6 characters. Please try again!");
        // }

        const data = { email, password};
        const processLoginUserData = await api.loginUser(data);
        if(!processLoginUserData){
            setError("something went wrong");
            return;
        }
        onSetLoginUser(processLoginUserData);
        navigate('/dashboard');
        
    }

    return (
        <div className='flex justify-center signin-reg-button mt-[10%] text-center'>
            <div className='w-[30%] p-5 ' style={{border: "1px solid red"}}>
                <h1> Welcome Back</h1>
                <h4> Login</h4>

                {error && (
                    <p className='text-[red] mb-5'>{error}</p>
                )}
                <form onSubmit={login}>
                    <input type='email' placeholder='Enter Your email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPasword(e.target.value)} />
                    <input type='submit' value={'Submit'} name='Submit' />
                </form>
            </div>
        </div>
    );
}

export default Login;