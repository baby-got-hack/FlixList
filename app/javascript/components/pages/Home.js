import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

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
          <br />
          <br />
          <br />
          <Button color="danger" id="home-signup-button">
            <a href={new_user_route}>Sign Up</a>
          </Button>
        </div>
        <div id="faq">
          <h1>This is the FAQ section</h1>
         
        </div>
        
      </>
    );
  }
}
export default Home;
