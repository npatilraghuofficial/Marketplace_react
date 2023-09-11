import React from 'react'
import NavbarComponent from './Components/Navbar'
import Carousal from './Components/Carousal'

import AnimatedCardsUtil from './Components/AnimatedCardsUtil'
import HorizontalScroll from './Components/HorizontalScroll'

import { StyledEngineProvider } from '@mui/material/styles';
const App = () => {
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

   
     </> 
  )
}

export default App
