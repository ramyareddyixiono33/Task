import React from 'react'
import '../css/Navbar.css'
import nav1 from '../Images/nav1.png'
import nav2 from '../Images/nav2.png'
import nav3 from '../Images/nav3.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left_section'>
            <img src={nav1} className="nav1"/>
            <img src={nav2} className="nav2"/>
            <span className='nav4'>x</span>
            <img src={nav3} className="nav3"/>
        </div>
        <div className='right_section'>
            <button>LOGIN</button>
        </div>
    </div>
  )
}

export default Navbar