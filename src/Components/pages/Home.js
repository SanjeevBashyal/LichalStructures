import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Images from '../Images';
import Slider from '../Slider'
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Images/>
      <Slider />
      <Footer />
    </>
  );
}

export default Home;
