import React, { useEffect } from 'react'
import Land from '../Components/Landing/Land'
import Brand from '../Components/Brands/Brand'
import Products from '../Components/Products/Products'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Home() {
  const navigate=useNavigate()

  useEffect(() => {
    const data = { token: localStorage.getItem('token') };


    let isMounted = true; // Flag to prevent state updates if the component is unmounted

    axios.post('http://localhost:5000/verify', data)
      .then((res) => {
        if (isMounted) {
          if (res.data.status === "success") {
            alert(res.data.status);
          } else {
            
          }
        }
      })
      .catch((err) => {
        if (isMounted) {
          navigate('/');
          // alert(err.message);
        }
      });

    // Cleanup function to set the flag to false on component unmount
    return () => {
      isMounted = false;
    };
  }, [navigate]);
  return (
    <div>
      <Land/>
    <Brand/>
    <Products/> 
    </div>
  )


}

export default Home