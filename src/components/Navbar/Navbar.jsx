import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'

const Navbar = () => {

const [menu,setMenu] = useState("shop");


  return (
    <div className='navbar'> 
     <div className='nav-logo'>
         <img src={logo} alt="" />
         <p>BISMILLAH IRON HARDWARE & GENERAL STORES</p>
     </div>
     <ul className='nav-menu'>
      <li onClick={()=>{setMenu("products")}}>PRODUCTS{menu==="products"?<hr/>:<></>}</li>
      <li onClick={()=>{setMenu("contacts")}}>CONTACTS{menu==="contacts"?<hr/>:<></>}</li>
     </ul>
     <favicon/>
    </div>
  )
}

export default Navbar
