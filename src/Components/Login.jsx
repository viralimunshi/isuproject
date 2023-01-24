import React, {useState} from 'react'
import '../Style/Form.css'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email + ' :: ' + password);
        navigate('/dashboard');
    }

    return (
        <div className='loginform'>
            <form onSubmit={handleSubmit}>
                <div className='form-inner'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} 
                            placeholder='Email' id='email' name='email' value={email} required={true}/>
                    
                    <label htmlFor='password'>Password:</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' id='password' name='password' value={password} required={true}/>
                    
                    <div className='form-btn'>
                        <button className='btn btn-primary' type='submit' onClick={props.login}>Log In</button>
                        <button className='link-btn' onClick={() => navigate('/signup')}>
                            Don't have an account? Register here.</button>
                        {/* <button className='link-btn'>Forgot Password?</button> */}
                    </div>
                </div>
            </form>
        </div>
    )
}
