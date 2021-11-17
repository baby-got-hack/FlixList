import React, { Component } from "react"
import pic from "../assets/applogo.png"
import { NavLink } from 'react-router-dom'

class Header extends Component{
render(){
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route
      } = this.props
    return(
        <header>
            <div className="nav-links">
            <NavLink to="/">
                <img id="logo-img" src={pic} alt="flixlist logo"></img>
            </NavLink>
            {!logged_in &&
            <>
                <a  href={sign_in_route}>Login</a>
                <a  href={new_user_route}>Sign Up</a> 
            </>
            }
            </div>
        </header>
    )
}
}
export default Header