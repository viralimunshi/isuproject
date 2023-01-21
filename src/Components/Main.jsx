import React, {useState} from 'react'
import Login from './Login';
import Register from './Register';

export default function Main() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleform = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <div>
        {
            currentForm === "login" ? <Login onFormSwitch={toggleform}/> : <Register onFormSwitch={toggleform}/>
        }
        </div>
    )
}
