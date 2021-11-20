import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
    <p>©2021 BabyGotHack</p>
      <footer className="all">
        
        <NavLink to="/AboutUs"><span className="footer">About Us</span></NavLink>
        <NavLink to="/#faq"><span className="footer">FAQs</span></NavLink>
        <a href="https://www.hollywoodreporter.com/" target="_blank">
          <span className="footer">Hollywood News</span>
        </a>
      </footer>
      </>
    );
  }
}
export default Footer;
