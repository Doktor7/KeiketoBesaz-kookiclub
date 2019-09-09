import React from 'react';
import "./Navbar.scss";
import LOGO from "../../assets/logo.png";
// import "../../assets/js/plugins/@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/js/plugins/nucleo/css/nucleo.css";
import {IoMdMenu} from "react-icons/io";
const NavbarComponent = () => {
    return (
        <div className="NavbarTop">
            <img width={"3.5%"} className="ml-2 py-2" alt={"keiketoBesaz"} src = {LOGO}/>
            <div className="float-right h-auto" >
                <IoMdMenu className="MenuBar"/>
            </div>
        </div>
    );
};

export default NavbarComponent;