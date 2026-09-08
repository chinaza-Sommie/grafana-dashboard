import { useEffect, useState } from 'react';

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function Register() {
    const[firstname, setFirstname] = useState<string>('');
    const[lastname, setLastname] = useState<string>('');
    const[email,setEmail] = useState<string>('');
    const[password,setPasword] = useState<string>('');
    const[confirmPassword,setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const register = (e: React.SubmitEvent<HTMLFormElement>) => {
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
        <div>
            <div className='flex justify-center signin-reg-button mt-[10%] text-center'>
                <div className='w-[30%] p-5 ' style={{border: "1px solid red"}}>
                    <h1> Register</h1>
                    <h4> Fill the form below</h4>
                    {error && (
                        <p className='text-[red] mb-5'>{error}</p>
                    )}
                    <form onSubmit={register}>
                        <input type='Firstname' placeholder='Enter Your Firstname' value={firstname} onChange={(e)=> setFirstname(e.target.value) }/>
                        <input type='Lastname' placeholder='Enter Your Lastname' value={lastname} onChange={(e)=> setLastname(e.target.value) } />
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