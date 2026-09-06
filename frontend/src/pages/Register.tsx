import { useEffect, useState } from 'react';

// Define a TypeScript interface for our API response
interface Greeting {
  message: string;
}

function Register() {
  const [greeting, setGreeting] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <div className='flex justify-center signin-reg-button mt-[10%] text-center'>
          <div className='w-[30%] p-5 ' style={{border: "1px solid red"}}>
            <h1> Register</h1>
            <h4> Fill the form below</h4>

            <form>
                <input type='Firstname' placeholder='Enter Your Firstname' />
                <input type='Lastname' placeholder='Enter Your Lastname' />
                <input type='email' placeholder='Enter Your email' />
                <input type='password' placeholder='Enter Password' />
                <input type='password' placeholder='Confirm Password' />
                <input type='submit' value={'Submit'} name='Submit' />
            </form>
          </div>
      </div>
    </div>
  );
}

export default Register;