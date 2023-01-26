import React, {useState} from 'react';
import '../Style/Form.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [fullname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='regiform'>
            <form onSubmit={handleSubmit}>
                <div className='form-inner'>
                    <label htmlFor='name'>Full Name:</label>
                    <input type='text' onChange={(e) => setName(e.target.value)}
                            placeholder='Full Name' id='name' name='name' value={fullname} required={true}/>
                    
                    <label htmlFor='email'>Email:</label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)}  
                            placeholder='Email' id='email' name='email' value={email} required={true}/>
                    
                    <label htmlFor='password'>Password:</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' id='password' name='password' value={password} required={true}/>
                    
                    <div className='form-btn'>
                        <button className='btn btn-primary' type='submit'>Register</button>
                        <button className='link-btn' onClick={() => navigate('/login')}>
                            Already have an account? Login here.</button>
                    </div>
                </div>            
            </form>
        </div>
    )
}
