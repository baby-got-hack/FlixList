import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Philip from "../assets/Philip.jpg";
import Lillian3 from "../assets/Lillian3.png";
import Sahtra from "../assets/Sahtra.jpg";
import Elias4 from "../assets/Elias4.png";
import LinkedIn from "../assets/linkedin-in-brands.svg";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";

class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="body-container">
          <h1 id="about-h1">Meet the FlixList Creators!</h1>
          <div className="aboutus-body">
            <CardGroup>
              <Card color="dark" className="aboutus-card">
                <CardImg alt="Card image cap" src={Philip} top width="25%" />
                <CardBody>
                  <CardTitle tag="h5">PHILIP DISIDORO</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Product Manager
                  </CardSubtitle>
                  <CardText>
                    <br />
                    "There are 360 degrees, so why only stick to one? Zaha
                    Hadid"
                    <br />
                    ~Zaha Hadid
                  </CardText>
                  <a href="https://www.linkedin.com/in/pdisidoro/">
                    <img src={LinkedIn} className="linkedin-btn" />
                  </a>
                </CardBody>
              </Card>
              <Card color="dark" className="aboutus-card">
                <CardImg alt="Card image cap" src={Lillian3} top width="25%" />
                <CardBody>
                  <CardTitle tag="h5">LILLIAN McGILLIVRAY</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Project Manager
                  </CardSubtitle>
                  <CardText>
                    <br />
                    "If you think it's expensive to hire a professional to do
                    the job, just wait until you hire an amateur"
                    <br />
                    ~83oranges
                  </CardText>
                  <a href="https://www.linkedin.com/in/lillian-mcgillivray-8118315/">
                    <img src={LinkedIn} className="linkedin-btn" />
                  </a>
                </CardBody>
              </Card>
              <Card color="dark" className="aboutus-card">
                <CardImg alt="Card image cap" src={Sahtra} top width="25%" />
                <CardBody>
                  <CardTitle tag="h5">SAHTRA 'CHAWWH'</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Tech Lead
                  </CardSubtitle>
                  <CardText>
                    <br />
                    "Life is a tornado and I'm the cow spinning around for
                    cinematic effect"
                    <br />
                    ~@69possums420
                  </CardText>
                  <a href="https://www.linkedin.com/in/Chawwh/">
                    <img src={LinkedIn} className="linkedin-btn" />
                  </a>
                </CardBody>
              </Card>
              <Card color="dark" className="aboutus-card">
                <CardImg alt="Card image cap" src={Elias4} top width="25%" />
                <CardBody>
                  <CardTitle tag="h5">ELIAS TSEGAY</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Design Lead
                  </CardSubtitle>
                  <CardText>
                    <br />
                    "One man’s crappy software is another man’s full time job"
                    <br />
                    ~Jessica Gaston
                  </CardText>
                  <a href="https://www.linkedin.com/in/elias-zerai-b1693a134//Elias">
                    <img src={LinkedIn} className="linkedin-btn" />
                  </a>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
