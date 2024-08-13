import React from 'react'
import pic from "../Assets/pic1.png"
import pic3 from "../Assets/pic2.png"
import pic4 from "../Assets/pic3.png"
import pic2 from "../Assets/pic4.png"
import p1 from "../Assets/p1.png"
import p2 from "../Assets/p2.png"
import p3 from "../Assets/p3.png"
import p4 from "../Assets/p4.png"
import p5 from "../Assets/p5.png"
import p6 from "../Assets/p6.png"

import'./Products.css'

function Products() {
  return (

<>

    <div className='product-page'>
        <h1 style={{display:"flex" , justifyContent:"center", padding:"20px",alignItems:"center",textAlign:"center",fontWeight:"bolder", fontSize:"28px"}}>Available Products with offer</h1>
        <p style={{display:"flex",justifyContent:"center", alignItems:"center",textAlign:"center"}} >Please check it Product page</p>
        <div className='product-items'>
<div className='item-1'>
    <img src={pic} alt="pic"/>
    <h3>Casual Dresses are Available</h3>
    <p>Ratings:⭐⭐⭐⭐</p>
    <p>Starting Prices $250 up to $999 </p>
</div>

<div className='item-2'>
    <img src={pic2} alt="pic" />
    <h3>New Collections Sneakers</h3>
    <p>Ratings:⭐⭐⭐⭐</p>
    <p>Starting Prices $550 up to $2999</p>
</div>


<div className='item-3'>
    <img src={pic3} alt="pic" />
    <h3>New Mobiles are Available</h3>
    <p>Ratings:⭐⭐⭐⭐</p>
    <p>Starting Prices $650 up to $3999</p>
</div>

<div className='item-4'>
    <img src={pic4} alt="pic" />
    <h3>New Brands bags are Available </h3>
    <p>Ratings:⭐⭐⭐⭐</p>
    <p>Starting Prices $250 up to $999</p>
</div>
        </div>

<div className='p-cont'>
    <div className='p-pic'>
        <img src={p1} alt='pic'/>
        <img src={p2} alt='pic'/>
        <img src={p3} alt='pic'/>
        <img src={p4} alt='pic'/>
        <img src={p5} alt='pic'/>
        <img src={p6} alt='pic'/>
        
    </div>
</div>

        <div className='offer'>
            <div className='offer-tag'>
          <p><span>SALE UP TO 70% OFF</span> FOR ALL CLOTHES & ALL ITEMS, ON ALL BRANDS. </p>
        </div>
        </div>

        <div className='product-list'>

    <div className='list1'>

    <h1 ><i className ="fa-solid fa-globe" style={{fontSize:'38px'}}></i> </h1>
        <h3>Worldwide Shipping</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iste maiores facilis qui totam odit enim ullam.</p>
    </div>

    <div className='list2'>
    <h1>  <i className="fa-brands fa-fort-awesome" style={{fontSize:'38px'}}></i> </h1>
        <h3>Best Quality</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iste maiores facilis qui totam odit enim ullam.</p>
    </div>

    <div className='list3'>
    <h1> <i className="fa-solid fa-bullhorn"style={{fontSize:'38px'}}></i></h1>
        <h3> BEST OFFERS</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iste maiores facilis qui totam odit enim ullam.</p>
    </div>

    <div className='list4'>
    <h1> <i className="fa-solid fa-truck-fast" style={{fontSize:'38px'}}></i></h1>
        <h3>FAST SHIPING</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi iste maiores facilis qui totam odit enim ullam.</p>
    </div>
</div>


    </div>


    </>



  )
}

export default Products