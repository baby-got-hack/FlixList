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
      <header>
        <div className="header-container">
          <NavLink to="/">
            <img id="logo-img" src={pic} alt="flixlist logo"></img>
          </NavLink>

          {!logged_in && (
            <>
              <div className="nav-bar">
                <Button color="primary">
                  <a href={new_user_route}>
                    <span>Sign Up</span>
                  </a>
                </Button>
                <Button color="primary">
                  <a href={sign_in_route}>
                    <span>Login</span>
                  </a>
                </Button>
              </div>
            </>
          )}

          {logged_in && (
            <Button color="primary">
              <a href={sign_out_route}>
                <span>Log Out</span>
              </a>
            </Button>
          )}
        </div>
      </header>
    );
  }
}
export default Header;
