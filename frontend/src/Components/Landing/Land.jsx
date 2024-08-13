import React from 'react'
import "./Land.css"
import land from "../Assets/land.png"
function Land() {
  return (
    <div className='land-page' >
      <img src={land} alt='' />
      <div className='land-main'>
        <h1>Raining Offers For Hot Summer!</h1>
        <div className='land-sec'>
          <p>25% Off On All Products</p>
        </div>
        <div className='land-thd'>
          <button>ShopNow</button>
          <button>FindMore</button>
        </div>
      </div>

    </div>
  )
}

export default Land