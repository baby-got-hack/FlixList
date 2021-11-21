import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer id="footer-container">
        <a
          href="https://github.com/baby-got-hack/FlixList"
          target="_blank"
          className="footer-links"
        >
          ©2021 BabyGotHack
        </a>
        <NavLink to="/AboutUs" className="footer-links">
          About Us
        </NavLink>
        <NavLink to="/#faq" className="footer-links">
          FAQs
        </NavLink>
        <a
          href="https://www.hollywoodreporter.com/"
          target="_blank"
          className="footer-links"
        >
          Hollywood News
        </a>
      </footer>
    );
  }
}
export default Footer;
