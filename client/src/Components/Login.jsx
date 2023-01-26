import React, {useState} from 'react'
import '../Style/Form.css'
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import loginAction from './AuthAction';

export default function Login(props) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState(''); 
    let navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const [user, setUser] = useState(null);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setLoginDetails((loginDetails) => ({ ...loginDetails, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const user = await loginUser(loginDetails);
        // console.log(loginDetails.email + ' :: ' + loginDetails.password);
        setUser(loginDetails.email);
        // navigate('/dashboard');
        // <Navigate to="/dashboard" state={email} replace={true} />
        // return <Navigate to='/dashboard' replace state={{ from: location }}/>
    };

    return (
        <div className='loginform'>
            <form onSubmit={handleSubmit}>
                <div className='form-inner'>
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
            {user && <Navigate to="/dashboard" state={user} replace={true} />}
        </div>
    )
}
