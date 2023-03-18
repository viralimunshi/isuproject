import React, {useState} from 'react'
import '../Style/Form.css'
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Axios from 'axios';

export default function Login(props) {
    let navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const [user, setUser] = useState([]);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setLoginDetails((loginDetails) => ({ ...loginDetails, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/api/login', { 
            email: loginDetails.email, 
            password: loginDetails.password
        }).then((response) => {
            setUser(response.data);
            if (response.data === '') {
                document.getElementById('msg').hidden = false;
            } else {
                user.map((val) => {
                    if(val.fullname !== '') {
                        // console.log('in if val.fullname >> ' + val.fullname);
                        return navigate('/dashboard',{state:{user:val.fullname}})
                    }
                });
            }
        });
    };

    return (
        <div className='loginform'>
            <form onSubmit={handleSubmit}>
                <div className='form-inner'>
                    <div className='msg' id='msg' hidden={true}>
                        Invalid Email or Password!
                    </div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' onChange={changeHandler} 
                            placeholder='Email' id='email' name='email' value={loginDetails.email} required={true}/>
                    
                    <label htmlFor='password'>Password:</label>
                    <input type='password' onChange={changeHandler}
                            placeholder='Password' id='password' name='password' value={loginDetails.password} required={true}/>
                    
                    <div className='form-btn'>
                        <button className='btn btn-primary' type='submit'>Log In</button>
                        <button className='link-btn' onClick={() => navigate('/signup')}>
                            Don't have an account? Register here.</button>
                        {/* <button className='link-btn'>Forgot Password?</button> */}
                    </div>
                </div>
            </form>
        </div>
    )
}
