import React, {useState} from 'react'
import '../Style/Form.css'

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-5 offset-md-4 form'>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} 
                            placeholder='Email' id='email' name='email' value={email} required={true}/>
                    <br/>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password' id='password' name='password' value={password} required={true}/>
                    <br/>
                    <button type='submit'>Log In</button>
                    <br/>
                    </form>
                    <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
                </div>
            </div>
        </div>
    )
}
