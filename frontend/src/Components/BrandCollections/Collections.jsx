import React,{useEffect} from 'react'
import collab from "../Assets/collab.png"
import'./Collections.css'
import 'animate.css';
import axios from 'axios';


import nike from "../Assets/nike.png"
import puma from "../Assets/puma.png"
import adidas from"../Assets/adidas.png"
import american from"../Assets/american.png"
import jockey from "../Assets/jockey.png"
import play from "../Assets/play.png"


import n1 from"../Assets/n1.png"
import n2 from"../Assets/n2.png"
import n3 from"../Assets/n3.png"
import n4 from"../Assets/n4.png"

import puma1 from "../Assets/puma-img1.png"
import puma2 from "../Assets/puma-img2.png"
import puma3 from "../Assets/puma-img3.png"
import puma4 from "../Assets/puma-img4.png"
import puma5 from "../Assets/puma-img5.png"

import adi1 from "../Assets/adi1.png"
import adi2 from "../Assets/adi2.png"
import adi3 from "../Assets/adi3.png"
import adi4 from "../Assets/adi5.png"

import am1 from "../Assets/am-1.png"
import am2 from "../Assets/am-2.png"
import am3 from "../Assets/am-3.png"
import am4 from "../Assets/am-4.png"
import am5 from "../Assets/am-5.png"

import j1 from "../Assets/j1.png"
import j2 from "../Assets/j2.png"
import j3 from "../Assets/j3.png"
import j4 from "../Assets/j4.png"

import play1 from "../Assets/play1.png"
import play2 from "../Assets/play2.png"
import play3 from "../Assets/play3.png"
import play4 from "../Assets/play4.png"
import play5 from "../Assets/play5.png"
import { useNavigate } from 'react-router';

function Collections() {

  const navigate=useNavigate()

  useEffect(() => {
    const data = { token: localStorage.getItem('token') };


    let isMounted = true; // Flag to prevent state updates if the component is unmounted

    axios.post('http://localhost:5001/verify', data)
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
        <div className='collect'>
          <img  class="animate__animated animate__bounce" src={collab} alt='pic' width={"850px"}  />
          </div>
<div className='groups'>
<div className='nike-sec'>
  <h2><img src={nike} alt='pic'width={"50px"} /> NIke</h2>
  <div className='nike-pic'>
    <img src={n1} alt='pic'/><p>New</p>
    <img src={n2} alt='pic'/><p>Brands</p>
    <img src={n3} alt='pic'/><p>Collections</p>
    <img src={n4} alt='pic'/>
  </div>
</div>

<div className='nike-sec'>
  <h2><img src={puma} alt='pic'width={"50px"}  />Puma</h2>
  <div className='nike-pic'>
    <img src={puma1} alt='pic' width={"180px"} /><p>New</p>
    <img src={puma2} alt='pic'/><p>Brands</p>
    <img src={puma3} alt='pic'/><p>Shoe</p>
    <img src={puma4} alt='pic'/><p>Collections</p>
    <img src={puma5} alt='pic'/>
  </div>
</div>

<div className='nike-sec'>
  <h2><img src={adidas} alt='pic'width={"50px"}  /> Adidas</h2>
  <div className='nike-pic'>
    <img src={adi1} alt='pic'/><p>New</p>
    <img src={adi2} alt='pic'/><p>Brands</p>
    <img src={adi3} alt='pic'/><p>Collections</p>
    <img src={adi4} alt='pic'/>
  </div>
</div>


<div className='nike-sec'>
  <h2><img src={american} alt='pic' width={"50px"} /> American</h2>
  <div className='nike-pic'>
    <img src={am1} alt='pic'/><p>New</p>
    <img src={am2} alt='pic'/><p>Brands</p>
    <img src={am3} alt='pic'/><p>Luggage</p>
    <img src={am4} alt='pic'/><p>Collections</p>
    <img src={am5} alt='pic'/>
  </div>
</div>

<div className='nike-sec'>
  <h2><img src={jockey} alt='pic'width={"50px"}  /> Jockey</h2>
  <div className='nike-pic'>
    <img src={j1} alt='pic'/><p>New</p>
    <img src={j2} alt='pic'/><p>Brands</p>
    <img src={j3} alt='pic'/><p>Collections</p>
    <img src={j4} alt='pic'/>
  </div>
</div>

<div className='nike-sec'>
  <h2><img src={play} alt='pic'width={"50px"}  /> PlayBoy</h2>
  <div className='nike-pic'>
    <img src={play1} alt='pic'/><p>New</p>
    <img src={play2} alt='pic'/><p>Brands</p>
    <img src={play3} alt='pic'/><p>Perfumes</p>
    <img src={play4} alt='pic'/><p>Collections</p>
    <img src={play5} alt='pic'/>
  </div>
</div>

</div>
<div className='offer'>
            <div className='offer-tag'>
          <p><span>SALE UP TO 70% OFF</span> FOR ALL CLOTHES & ALL ITEMS, ON ALL BRANDS. </p>
        </div>
        </div>

        </div>
   
  )
}

export default Collections