import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import notFound from "../assets/nasa-Yj1M5riCKk4-unsplash.jpg"

class NotFound extends Component {
  render() {
    return (
      <>
        <div className="body-container">
          <div id="not-found-page">
          <h1>Aw Snap... </h1>
            <h1> No Movies Out Here...</h1>
          <NavLink to="/">
          <Button color="danger">Return To The Flix</Button>
          </NavLink>
          </div>
        </div>
      </>
    );
  }
}
export default NotFound;
