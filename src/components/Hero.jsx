import React from 'react'

function Hero() {
  return (
    <main className='hero'>
      <div className='hero-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
            <paragrap>
            YOUR FEET DESERVE THE BEST<br/> AND WE ARE HERE TO HELP YOU<br/> 
        WITH OUR SHOES.YOUR FEET DESERVE<br/> THE BEST AND WE ARE HERE<br/> TO 
        HELP YOU WIYH OUR SHOES.
            </paragrap>
        <div className='hero-button'>
            <button>SHOP NOW</button>
            <button>CATEGORY</button>
        </div>
        <div className='shopping'>
          <p> Also Available On</p>
          <div className='brand-icons'>
            <img src='/images/amazon (1).png' alt='amazon-logo'/>
            <img src='/images/flipkart.png' alt='flipkart-logo'/>

            </div>  
        </div>
      </div>
      <div className='hero-image'>
       <img src='/images/shoe_image.png' className="dd"alt='shoe-logo' />
      </div>
    </main>
  )
}

export default Hero
