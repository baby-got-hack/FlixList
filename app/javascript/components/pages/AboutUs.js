import React, { Component } from 'react';
import Philip from '../assets/Philip.jpg'
import Lillian from '../assets/Lillian.jpg'
import Sahtra from '../assets/Sahtra.jpg'
import Elias from '../assets/Elias.jpg'

class AboutUs extends Component {
    render() {
        return (
            <div>
                <h3 className="about-us-header">About us</h3>
                <div className="about-us-container">
                    <div className="about-us-person">
                        <img src={Philip} alt="Philip Disidoro" width="220" height="320"/>
                        <div>
                            <h3>Philip Disidoro</h3>
                            <h3>Product Manager</h3>
                            <div className="about-us-person-info">
                                <p>Developer 1 Story</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-person">
                        <img src={Lillian} alt="Lillian" width="220" height="320"/>
                        <div>
                            <h3>Lillian</h3>
                            <h3>Project Manager</h3>
                            <div className="about-us-person-info">
                                <p>Developer 2 Story</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-person">
                        <img src={Sahtra} alt="Sahtra Chawwh" width="220" height="320"/>
                        <div>
                            <h3>Chauncy Sapien</h3>
                            <h3>Sahtra</h3>
                            <div className="about-us-person-info">
                                <p>Developer 3 Story</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-person">
                        <img src={Elias} alt="Elias" width="220" height="320"/>
                        <div>
                            <h3>Elias Tsegay</h3>
                            <h3>Design Lead</h3>
                            <div className="about-us-person-info">
                                <p>Developer 4 Story</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
