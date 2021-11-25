import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import Compiled from "./Compiled";

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
          <h1>Welcome to FlixList!</h1>
          <br />
          <h3>
            Ugh! That feeling when you’re sure you’ve watched every movie or TV
            series on the world wide web...
          </h3>
          <br />
          <h3>
            But there is no way Hollywood would leave you stranded like that!
          </h3>
          <br />
          <br />
          <h4>
            Entertainment Personality Quiz: Let FlixList scour all the top
            streaming services based on YOUR entertainment personality.
          </h4>
          <br />
          <h4>
            {" "}
            Your Viewing Bucket: FlixList will make sure your Entertainment
            bucket is never empty.
          </h4>
          <br />
          <br />
          <br />
          <h4>It’s that easy! So stop the endless surfing...</h4>
          <br />
          <h4>
            Flixlist makes it so you don’t have to waste time, while wasting
            time.
          </h4>
          <br />
          <br />
          <br />
          <Button color="danger" id="home-signup-button">
            <a href={new_user_route}>Sign Up</a>
          </Button>
        </div>
        <Compiled />
      </>
    );
  }
}
export default Home;
