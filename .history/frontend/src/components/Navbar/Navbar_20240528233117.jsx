import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    
    const[menu,setMenu]=useState("Home");

    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")   //redirected to home page
    }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==='Home'?'active':''}>Home</Link> 
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==='Menu'?'active':''}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==='Mobile-app'?'active':''}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("About-us")} className={menu==='About-us'?'active':''}>About us</a> 
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="search_icon" />
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt="basket_icon"/></Link>
            {/**count of basket items (Number of items in the cart) **/}
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="navbar-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt='bag_icon' /><p>Orders</p></li>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon} alt='logout_icon' /><p>Logout</p></li>

          </ul>
        </div>}
        
      </div>
    </div>
  )
}

export default Navbar
