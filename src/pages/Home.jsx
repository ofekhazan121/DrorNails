import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Gallery from "../Components/Gallery";

const Home = () => {
  return (
    <div className="">
        {/*<Navbar/>*/}
        <section name="hero" id="hero">
          <Hero />
        </section>
        <section name="gallery" id="gallery">
          <Gallery />    
        </section>
        
    </div>
  );
};




export default Home

