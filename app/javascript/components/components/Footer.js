import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>©2021 BabyGotHack</p>
        <NavLink to="/AboutUs">About Us</NavLink>
        <NavLink to="/#faq">FAQs</NavLink>
        <a href="https://www.hollywoodreporter.com/" target="_blank">
          Hollywood News
        </a>
      </footer>
    );
  }
}
export default Footer;
