import React from 'react'
import "./Header.css"
import logo from "../../images/logo2.PNG"
import SearchIcon from "@material-ui/icons/Search";

import {Link} from "react-router-dom"





function Header() {
  const handleSignin=()=>{

  }
    return (
        <div className="header">
        <Link to="/"> <img className="header_logo" src={logo} alt="logo"/></Link>
       
       
  

            <div className="header_search">
            <input 
            className="header_searchInput"
            type="text"
            />
            <SearchIcon className="header_searchIcon"/>
             </div>
             <div className="header_nav">
             <Link to="./login" exact >
             <div className="header_option">
             <span className="header_optionLineOne">
             Hello Student
             </span>
             <span onClick={handleSignin} className="header_optionLineTwo">
             Sign In
             </span>
             </div>
             </Link>
             <Link to="./logout" >
             <div className="header_option">
             <span className="header_optionLineOne">
             Hello Student
             </span>
             <span onClick={handleSignin} className="header_optionLineTwo">
         Logout
             </span>
             </div>
             </Link>
          
             
             
             </div>
        </div>
    );
}

export default Header
