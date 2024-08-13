import React from 'react'
import'./Footer.css'
function Footer() {
  return (
    <div className='foot-page'>
        <hr></hr>
        <div className='news-letter'>
            <h1>NEWS LETTER</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, dolores dignissimos beatae laboriosam ipsam assumenda. Asperiores minima accusamus odit tenetur recusandae cum, sunt eligendi illo?</p>
            <div className='news-box'>
<input type='email' placeholder='Enter Your Mail'/>
<button>SUBSCRIBE</button>
</div>
        </div>
        <hr></hr>

<div className='foot-page2'>

    <div className='company'>
    <p className='n-tag'>Express<span>Mall</span></p>
    </div>

    <div className='ex-cls'>
        <h3>Explore</h3>
        <p>Bestseller on since 2020 to 2024 we give brand products with reasonable prices:)</p>

    </div>
    <div className='help'>
        <h3>Help</h3>
        <p>Track order</p>
        <p>Delivery & Returns</p>
        <p>FAQS</p>
        <p>24hrs service team</p>
    </div>

   
</div>


<div className="web-icon">
<h4>Copyright © 2024 ExpressMall | Powered by ExpressMall.</h4>

    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-github"></i>
    </div>
    
<hr></hr>


    </div>
  )
}

export default Footer