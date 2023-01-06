import React from 'react';

const Banner = () => {
    return (
     <div className='pt-16'>
           <div className="hero" style={{ backgroundImage: `url("https://i.ibb.co/txxptC0/thumb-1920-1010903-1.jpg")` }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="py-20">
      <h1 className="mb-5 text-5xl font-bold uppercase">Welcome to <br /> <span className='text-black'>dummy news</span></h1>
      <p className="mb-5">A news portal is an access point to news; This is generally thought of as a Internet connection to a news <br /> source but the definition of a “Portal” would include a newspaper, magazine or any other access to news.</p>
     
    </div>
  </div>
</div>
     </div>
    );
};

export default Banner;