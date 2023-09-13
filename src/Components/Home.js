import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './Navbar';
import Carousal from './Carousal';
import AnimatedCardsUtil from './AnimatedCardsUtil';
import HorizontalScroll from './HorizontalScroll';
import Footer from './Footer';
import FeaturedProduct from './FeaturedProduct';
import FeaturedService from './FeaturedService';
import FeaturedEvents from './FeaturedEvents';
import ViewAllTrendingAuctions from './SubPages/ViewAllTrendingAuctions';
import { StyledEngineProvider } from '@mui/material/styles';

const Home = () => {
  return (
   <>
   <NavbarComponent></NavbarComponent> 
    <Carousal></Carousal>

   
    <StyledEngineProvider injectFirst>
    <HorizontalScroll></HorizontalScroll>  
    </StyledEngineProvider>

    
    <StyledEngineProvider injectFirst>
    <AnimatedCardsUtil/>
    </StyledEngineProvider>

    <StyledEngineProvider injectFirst>
    <FeaturedProduct/>
    </StyledEngineProvider>


    <StyledEngineProvider injectFirst>
    <FeaturedService/>
    </StyledEngineProvider>

    <StyledEngineProvider injectFirst>
    <FeaturedEvents/>
    </StyledEngineProvider>



    <Footer></Footer>

   
     </>
   
  );
};

export default Home;
