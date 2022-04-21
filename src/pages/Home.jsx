import React from 'react'
import Annoucement from '../components/Annoucement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
 
import Navbar from '../components/Navbar'
import Newseletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
  <Annoucement/>
          <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newseletter />
      <Footer/>
    </div>
  );
}

export default Home