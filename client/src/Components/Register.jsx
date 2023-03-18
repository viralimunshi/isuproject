import React, {useState} from 'react';
import '../Style/Form.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import $ from 'jquery';

export default function Register() {
    const [registrationDetails, setRegistrationDetails] = useState({ fname: "", email: "", password: "" });
    let navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegistrationDetails((registrationDetails) => ({ ...registrationDetails, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registrationDetails.fname + " :: " + registrationDetails.email);
        Axios.post('http://localhost:3001/api/register', { 
            fname: registrationDetails.fname, 
            email: registrationDetails.email, 
            password: registrationDetails.password
        }).then(() => {
            console.log('data inserted successfully!');
        });

        $("*[id]").each(function() {
            document.getElementById(this.id).value = "";
        });
        document.getElementById('msg').hidden = false;
    }

    return (
        <div className='regiform'>
            <form onSubmit={handleSubmit}>
                <div className='form-inner'>
                    <div className='msg' id='msg' hidden={true}>
                        Registered Successfully! <a href='' onClick={() => navigate('/login')}>Login here.</a>
                    </div>
                    <label htmlFor='name'>Full Name:</label>
                    <input type='text' onChange={changeHandler} 
                            placeholder='Full Name' id='regname' name='fname' value={registrationDetails.fname} required={true}/>
                    
                    <label htmlFor='email'>Email:</label>
                    <input type='email' onChange={changeHandler}  
                            placeholder='Email' id='regemail' name='email' value={registrationDetails.email} required={true}/>
                    
                    <label htmlFor='password'>Password:</label>
                    <input type='password' onChange={changeHandler}
                            placeholder='Password' id='regpassword' name='password' value={registrationDetails.password} required={true}/>
                    
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
