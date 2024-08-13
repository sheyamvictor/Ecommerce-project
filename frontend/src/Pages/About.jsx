import React from 'react'
import dev from "../Components/Assets/dev.png"
import emc from "../Components/Assets/emc.png"
import mentor from "../Components/Assets/mentor.png"
import my from"../Components/Assets/my.png"
import './About.css'
function About() {
  return (
    <div className='about-page'>
      <div className='about-cont'>

        <div className='about-line'>
          <h1>Who We Are</h1>
          <p>The MERN stack is a popular web development stack used for building full-stack applications. The acronym MERN stands for MongoDB, Express.js, React, and Node.js. Each component in the stack has a specific role, and together, they provide a comprehensive framework for developing robust and scalable web applications. Here's a breakdown of each part of the MERN stack:</p>
          <img src={dev} alt='pic' width="350px"/>
        </div>
      </div>
      <hr/>
<div className='about-para'>
<h1>Our Team Error Makes Clever </h1>
  <div>
<p>Creating own websites is a journey filled with challenges and learning opportunities. At "Learn from Error Makes Clever," we believe that every mistake is a stepping stone to mastery. This website is not just a platform but a testament to the power of perseverance and guidance. With the invaluable mentorship of Vijay and the visionary support of our founder, Angel John, we have crafted a resource that empowers aspiring web developers to turn their errors into lessons. Together, we strive to build a community where learning from mistakes is celebrated, and every error paves the way to success.</p>
  </div>
  </div>
  <div className='about-card'>
  <div className='card1'>
  <img src={emc} alt='pic'/>
  <h3 className='text-2xl font-bold'>AgnelJohn</h3>
  <p className='text-2xl'>CEO-EMC</p>
  </div>
  <div className='card2'>
  <img src={mentor} alt='pic'/>
  <h3 className='text-2xl font-bold' >Vijay Anand</h3>
  <p className='text-2xl'>Mentor-EMC</p>
  </div>
  <div className='card3'>
  <img src={my} alt='pic'/>
  <h3 className='text-2xl font-bold' >Joseph Sheyam</h3>
  <p className='text-2xl'>Batch-8-Student</p>
  </div>
  </div>
<hr/>
<div className='about-follow'>
<div>

</div>
<div className='about-social'>
  <h2>Follow us</h2>
  <div className='about-media'>
  <a href='https://www.facebook.com/errormakesclever'><i class="fa-brands fa-facebook"></i>Facebook</a>
  <a href=''><i class="fa-brands fa-instagram"></i>Instagram</a>
  <a href='https://linkedin.com/in/a-sheyam'><i class="fa-brands fa-linkedin"></i>Linkedin</a>
  <a href='https://github.com/sheyamvictor'><i class="fa-brands fa-github"></i>Github</a>
  </div>
</div>

<div>

</div>
</div>
    </div>
  )
}

export default About