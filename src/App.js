import React from 'react'
import Navbar from './component/Navbar'; 
import Nav2 from'./component/Page1';
import Nav3 from'./component/Page2';
import Nav4 from'./component/Page3';
import Completed from './component/Page4';

export default function App() {
  return (
   <>
   <div className='desktop'>
  <Nav2/>
  <Nav3/>
  <Nav4/>
  <Navbar/>
  <Completed/>
  </div>
   </>
         )
}