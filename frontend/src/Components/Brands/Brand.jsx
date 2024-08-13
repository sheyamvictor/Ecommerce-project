import React from 'react'
import './Brand.css'
import brand from "../Assets/brand.png"
import brand2 from "../Assets/brand2.jpg"
import nike from "../Assets/nike.png"
import puma from "../Assets/puma.png"
import adidas from"../Assets/adidas.png"
import american from"../Assets/american.png"
import jockey from "../Assets/jockey.png"
import play from "../Assets/play.png"
function Brand() {
  return (
    <div className='brand-package'>
         
            <div className='brands-list'>
                <h2 className='text-2xl font-bold'>Most Available Bands</h2>
                <ul className='brand-tag'>
                    
                    <li> <img src={nike} alt='pic'/>Nike </li>
                    <li><img src={puma} alt='pic'/>Puma</li>
                    <li><img src={adidas}alt='pic'/>Adidas</li>
                    <li><img src= {american}alt='pic'/>American</li>
                    <li><img src={jockey} alt='pic'/>Jockey</li>
                    <li><img src={play}alt='pic'/>Playboy</li>
                </ul>
            </div>

        <hr></hr>
       
        <div className='brand-pic'> 
        
        <img src={brand2}alt="pic" />
      

        </div>
       
    </div>
  )
}

export default Brand