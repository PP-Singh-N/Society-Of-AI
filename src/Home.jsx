import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/img1.png'
import Common from './Common';
import Contact from './Contact';
import Services from "./Services"
const Home=()=>{
    return(
        <>
        <Common 
            name="Grow your business with"
            imgsrc={web}
            visit="./Services"
            btname="Get Started"
        />
        <Services/>
        <Contact/>
        </>
    );
};
export default Home;