import React, { useContext } from 'react'
import "./Header.css"
import logo from "../../images/logo2.PNG"
import SearchIcon from "@material-ui/icons/Search";



import { Link, Redirect } from "react-router-dom"
import Login from '../Login/Login1';


function Header() {

    return (
        <div className="header">
            <Link to="/"> <img className="header_logo" src={logo} alt="logo" /></Link>
            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text"
                />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to="/login" >
                    <div className="header_option">
                        <span className="header_optionLineOne">
                            Hello Student
                        </span>
                        <span className="header_optionLineTwo">
                            Sign In
                        </span>
                    </div>
                </Link>
                <Link to="/logout" >
                    <div className="header_option">
                        <span className="header_optionLineOne">
                            Hello Student
                        </span>
                        <span className="header_optionLineTwo">
                            Logout
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header
