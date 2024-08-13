import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/Assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]=useState("Home")
  return (
    <div className='navbar'>
      <Link to='./' ><img src={assets.logo} alt="" className='logo' width="100px"/></Link>
      <ul className='navbarmenu'>
        <Link to ='/'  onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>HOME</Link>
        <a href='#exploremenu'  onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>MENU</a>
        <a href='#footer' onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>CONTACT</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.Search} alt="" width="20px"/>
          <div className='searchicon'>
            <Link to='./cart' ><img src={assets.Basket} alt="" width="30px" /> </Link>
            <div className='dot'></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
