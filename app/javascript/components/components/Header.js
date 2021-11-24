import React, { Component } from "react";
import pic from "../assets/applogo.png";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <div className="header-container">
          <img id="logo-img" src={pic} alt="flixlist logo"></img>
        <NavLink to="/">
        </NavLink>
        <div className="nav-bar">
          {!logged_in && (
            <>
              <Button color="danger" className="header-btn">
                <a href={new_user_route}>Sign Up</a>
              </Button>
              <Button color="danger" className="header-btn">
                <a href={sign_in_route}>Login</a>
              </Button>
            </>
          )}

          {logged_in && (
            <Button color="danger" className="header-btn">
              <a href={sign_out_route}>Log Out</a>
            </Button>
          )}
        </div>
      </div>
    );
  }
}
export default Header;
