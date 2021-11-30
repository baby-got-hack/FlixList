import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    const { dropdownOpen } = this.state;

    return (
      <div className="header-container">
        <NavLink to="/">
          <img id="logo-img" src="Logo4.png" alt="flixlist logo"></img>
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
            <>
              <Dropdown
                className="header-btn"
                isOpen={dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle color="danger">
                <FontAwesomeIcon
                            icon={faBars}
                          />
                </DropdownToggle>
                <DropdownMenu dark container="body">
                  <DropdownItem>
                    <NavLink to="/bucket"> Entertainment Bucket</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/quiz"> Personality Quiz</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/yourfavorites">Your Favorites</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <a href={sign_out_route}>Log Out</a>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default Header;
