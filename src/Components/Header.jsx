import React from 'react'
import '../Style/Header.css'
import logo from '../isu_logo.jpg'

export default function Header() {
  return (
    <div>
      <div className='row header'>
          <div className="col-sm-3 col-md-6 col-lg-4">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-sm-9 col-md-6 col-lg-8 header-right">
            Class Scheduling Management
          </div>
        </div>
    </div>
  )
}
