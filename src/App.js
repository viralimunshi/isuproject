import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<><Header/><Login/></>}></Route>
      <Route path='/signup' element={<><Header/><Register/></>}></Route>
      <Route path='/dashboard' element={<><Header/><Homepage/></>}></Route>
    </Routes>
  );
}



export default App;
