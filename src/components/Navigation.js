import React from 'react';
import {NavLink} from "react-router-dom";
//{NavLink} : included in react-router-dom 

const Navigation = () =>{
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            // NavLink to =" path "
        </div>
    );
};

export default Navigation;
