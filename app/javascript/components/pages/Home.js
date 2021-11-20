import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;
    return (
      <>
        <div className="home-upper">
          <h1>This is the home page</h1>
          <button><a href={new_user_route}><span className="span1">Sign Up</span></a></button>
        </div>
        <div id="faq">
          <h1>This is the FAQ section</h1>
        </div>
        
        
      </>
    );
  }
}
export default Home;
