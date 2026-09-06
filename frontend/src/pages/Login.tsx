import { useEffect, useState } from 'react';

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function Login() {

    return (
        <div className='flex justify-center signin-reg-button mt-[10%] text-center'>
            <div className='w-[30%] p-5 ' style={{border: "1px solid red"}}>
                <h1> Welcome Back</h1>
                <h4> Login</h4>

                <form>
                    <input type='email' placeholder='Enter Your email' />
                    <input type='password' placeholder='Enter Password' />
                    <input type='submit' value={'Submit'} name='Submit' />
                </form>
            </div>
        </div>
    );
}

export default Login;