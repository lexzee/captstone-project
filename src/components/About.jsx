import React from 'react'
import img1 from '../assets/images/Mario_Adrian_A.jpg'
import img2 from '../assets/images/Mario_Adrian_b.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <section>
        <div>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section>
        <img src={img1} alt="" style={{width: '50%'}}/>
        <img src={img2} alt="" style={{width: '50%'}}/>
      </section>
    </div>
  )
}

export default About