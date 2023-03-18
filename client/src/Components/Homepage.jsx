import React from 'react';
import { useLocation } from 'react-router-dom' 

export default function Homepage({route}) {
  const location = useLocation();
  // console.log('console data >> ', location.state.user);

  return (
    <div>
        <span>Welcome to HomePage, {location.state.user} !!</span>
    </div>
  )
}
