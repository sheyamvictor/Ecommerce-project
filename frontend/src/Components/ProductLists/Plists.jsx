import React from "react";
import { Link } from 'react-router-dom'


function Plists({product}) {
    
  return (
    <>
    <div className='pic-card'>
    <img src={product.images[0].image} alt='pic' />
    <div>
      <h1>{product.name}</h1>

      <p>{product.description}</p>


      <i class="fa-solid fa-star" style={{width: `${product.ratings/5*100}`}}></i>
      
 
      <h3>₹{product.price}</h3>

      <div className='details-btn'>
       <Link to={"/product/"+ product._id} ><button>View Details</button></Link>
      </div>
    </div>
  </div>
  </>
  )
}

export default Plists;