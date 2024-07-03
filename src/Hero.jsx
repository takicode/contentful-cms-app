 import React from 'react'
 import heroImg from "./assets/code review.svg"

 const Hero = () => {
   return (
     <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
         <h2>Contentful CMS</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, iure? Facere quia ullam laborum nisi possimus ex </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
     </section>
   )
 }
 
 export default Hero