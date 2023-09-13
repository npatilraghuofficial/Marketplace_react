import React from 'react';
import NavbarComponent from './Components/Navbar';
import Carousal from './Components/Carousal';
import AnimatedCardsUtil from './Components/AnimatedCardsUtil';
import HorizontalScroll from './Components/HorizontalScroll';
import Footer from './Components/Footer';
import FeaturedProduct from './Components/FeaturedProduct';
import FeaturedService from './Components/FeaturedService';
import FeaturedEvents from './Components/FeaturedEvents';
import ViewAllTrendingAuctions from './Components/SubPages/ViewAllTrendingAuctions';


import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';


import ViewAllCategories from './Components/SubPages/ViewAllCategories';


import ViewAllServices from './Components/SubPages/ViewAllServices';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<ViewAllTrendingAuctions />} />

        <Route path="/categories" element={<ViewAllCategories/>} />
        <Route path="/services" element={<ViewAllServices/>} />

      </Routes>
    
      
    
    </Router>
  );
};

export default App;
