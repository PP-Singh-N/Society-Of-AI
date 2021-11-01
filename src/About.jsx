import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from "./Common.jsx";
import web from '../src/images/img1.png'
const About=()=>{
    return(
        <>
        <Common
            name="Welcome to the"
            imgsrc={web}
            visit="/contact"
            btname="Contact Us"
        />
        </>
    );
};
export default About;