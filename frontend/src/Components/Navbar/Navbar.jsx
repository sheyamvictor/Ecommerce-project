import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from "../Assets/online.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../../Context/Context'


function Navbar() {

  const { cartItemCount} = useCart(0);
  const [auth, setAuth] = useState(true)
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  const navigate = useNavigate()

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await axios.post('http://localhost:5001/verify', { token });
          if (data.message == "success") {
            setAuth(false);
            navigate('/');
          } 
        } catch (error) {
          console.log(error.message);
        }
      } else {
        setAuth(true);
      }
    };

    verifyToken();
  }, [navigate]);

  // useEffect(() => {

  //   axios.get("http://localhost:5000/api/v1/addCard")
  //     .then(res => {
  //       if (res.status === 200) {
  //         console.log(res.data.data.length)
  //         setCartItemCount(res.data.data.length);
          
  //       }
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //     });

  // }, []);


  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(true);
    navigate('/');
  };

  return (
    <div className='navbar'>
      <div className='menu-icon'>
        <i onClick={handleClick} className={`fa-solid fa-bars ${isOpen ? 'open' : ''}`}></i>

        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/Collections'>Brands-Collections</Link></li>
          <li><Link to='/Plists'>Product</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p className='n-tag'>Express<span>Mall</span></p>
      </div>
      <ul className='nav-menu'>
        <li><Link to='/home'>Home </Link> </li>
        <li><Link to='/Collections'> Brands-Collections </Link> </li>
        <li><Link to={'/Plists'}> Product </Link> </li>
        <li><Link to='/about'> About </Link> </li>
      </ul>
      <div className='nav-login-cart'>
      <button onClick={handleLogout}>
        {auth? 'Logout' : 'Login'}
      </button>
      
        <Link to='/cart' > <i className="fa-solid fa-cart-shopping" style={{ width: "20px", fontSize: "20px" }} /></Link>
        <div className='nav-count'>{cartItemCount}</div>

      </div>



    </div>
  )
}

export default Navbar
