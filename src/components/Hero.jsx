import React from 'react'
import hero from '../assets/images/restauranfood.jpg'

const Hero = () => {
  return (
    <div className='Hero'>
      <section>
        <div>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
        </div>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        <button>Reserve a Table</button>
      </section>
      <img src={hero} style={{width: '50%', height: '50%'}} alt="" />
    </div>
  )
}

export default Hero