import { useState } from 'react';
import { api, type User } from '../api';
import { Link, useNavigate } from 'react-router-dom';

// Define a TypeScript interface for our API response
interface LoginUserProp {
//   loginUser: User | null;
  onSetLoginUser: (loginUser: User) => void;
}

function Login({onSetLoginUser}: LoginUserProp) {
    const navigate = useNavigate()
    const[email,setEmail] = useState<string>('');
    const[password,setPasword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    

    const login = async (e: React.SubmitEvent<HTMLFormElement>) => {
        try{
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
                setError("something went wrong. Try again");
                return;
            }
            onSetLoginUser(processLoginUserData);
            navigate('/dashboard');

        }catch(e){
            return setError("Something went wrong. Please try a again")
        }
        
    }

    return (
        <div className='flex justify-center signin-reg-button mt-[10%] text-center'>
            <div className='w-[35%] py-[60px] px-[50px] bg-[#042642] rounded-lg shadow-xl/30 lg:w-[28%] lg:px-[40px]' >
                <h1 className='text-white'> Welcome Back</h1>
                <h4 className='text-[#29A699]'> Login</h4>

                {error && (
                    <p className='text-[red] bg-[#ffa2a2] border border-2 border-[red] mb-5 py-3 rounded-lg '>{error}</p>
                )}
                <form onSubmit={login} >
                    <input type='email' placeholder='Enter Your email' value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full appearance-none rounded-lg border-2 border-white bg-transparent"  />
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPasword(e.target.value)} className="w-full appearance-none rounded-lg border-2 border-white bg-transparent" />
                    {/* <input type='submit' value={'Submit'} name='Submit' className='rounded-lg mt-5 bg-[#29A699] border border-[#29A699] hover:cursor-pointer hover:bg-[#198c80]
                    transition delay-150 duration-300 ease-in-out'/> */}
                    <button type='submit' value={'Create Event'}  name='Submit' className='rounded-lg mt-5 bg-[#29A699] border border-[#29A699] hover:cursor-pointer hover:bg-[#198c80]
                    transition delay-150 duration-300 ease-in-out' > Create Event </button>
                </form>
               
                <p className='text-white'> Dont an account? <Link to='/register' className='text-[#29A699] underline'> Register </Link> </p>
            </div>
        </div>
    );
}

export default Login;