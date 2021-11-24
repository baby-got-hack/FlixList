import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Compiled from "./Compiled";


class Home extends Component {
  render(){
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
          <h1>That feeling when you’re sure you’ve watched every movie or tv series on the world wide web.
             But there is no way Hollywood would leave you stranded like that! Let FlixList scour all your 
             favorite streaming services, and then some, based on YOUR entertainment personality. 
             We will guide you towards the entertainment selections that you’ve been missing out on. 
            FlixList will take into account your entertainment viewing ‘personality’ and tailor your 
            viewing bucket so that it’s never empty. How will we do this? Members will fill out an 
            entertainment ‘personality’ questionnaire that includes genres you vibe with, release  
       </h1>
          <br />
          <br />
          <br />
          <Button color="danger" id="home-signup-button">
            <a href={new_user_route}>Sign Up</a>
          </Button>
        </div>
       <Compiled/>
      </>
    );
  }
}
export default Home;
