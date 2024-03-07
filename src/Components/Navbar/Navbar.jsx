import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import logo from '../Assets/logo1.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const {getTotalCartItemsCount} = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");

  return (
    <div className='nav-bar'>
        <div className="nav-logo">
          <div ><img src={logo} alt="" className="lg"/></div>
          <div>Shopper</div>
        </div>
        <ul className='nav-menu'>
          <li onClick={() => {setMenu("shop")}}><Link to='/' style={{textDecoration: 'none', color:'black'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("men")}}><Link to='/men' style={{textDecoration: 'none', color:'black'}}>Men</Link>{menu==="men"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("women")}}><Link to='/women' style={{textDecoration: 'none', color:'black'}}>Women</Link>{menu==="women"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("kids")}}><Link to='/kids' style={{textDecoration: 'none', color:'black'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="login-cart">
          <Link to='/login' style={{textDecoration: 'none'}}><button className='lgn-btn'>Login</button></Link>
          <Link to='/cart' style={{textDecoration: 'none'}}><div className="cart">Cart</div></Link>
          <div className="nav-cart-count">{getTotalCartItemsCount()}</div>
        </div>
    </div>
  )
}

export default Navbar