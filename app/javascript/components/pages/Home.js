import React, { Component } from "react";
import Quiz from "../assets/Personality-quiz.png";
import Bucket from "../assets/Bucket.png";
import {
  Button,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
} from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close1: false,
      close2: false,
      close3: false,
      close4: false,
    };
  }

  toggle1 = () => {
    this.setState({
      close1: !this.state.close1,
    });
  };
  toggle2 = () => {
    this.setState({
      close2: !this.state.close2,
    });
  };
  toggle3 = () => {
    this.setState({
      close3: !this.state.close3,
    });
  };
  toggle4 = () => {
    this.setState({
      close4: !this.state.close4,
    });
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    const { close1, close2, close3, close4 } = this.state;

    return (
      <>
        <div className="home-upper">
          <h1>Welcome to FlixList</h1>
          <h2>
            Feel like you’ve watched every movie or TV series on the world wide
            web?
          </h2>
          <h2>
            Hollywood would NEVER leave you stranded like that!
          </h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h3>Stop the endless surfing...</h3>
          <br />
          <Button color="danger" id="home-signup-button">
            <a href={new_user_route}>Sign Up</a>
          </Button>
          <br />
          <br />
          <h2>
            {" "}
            Flixlist makes it so you don’t have to waste time, while wasting
            time.
          </h2>
        </div>
        <div className="pitch-container">
          <div id="pitch3">
            <div id="pitch3-text">
              <h4>
                Let us search all the top streaming services based on YOUR
                Entertainment Personality.
              </h4>
            </div>
            <div id="pitch3-img">
              <img src={Quiz} id="quiz-img" />
            </div>
          </div>
          <div id="pitch4">
            <div id="pitch4-img">
              <img src={Bucket} id="bucket-img" />
            </div>
            <div id="pitch4-text">
              <h4>
                Your Viewing Bucket: FlixList will make sure your Entertainment
                bucket is never empty.
              </h4>
            </div>
            
          </div>
        </div>
        <div id="faq">
          <h1>Frequently Asked Questions</h1>
          <UncontrolledAccordion
            defaultOpen={["1", "2", "3", "4"]}
            stayOpen
            id="faq-content"
          >
            <AccordionItem>
              <AccordionHeader targetId="1" onClick={this.toggle1}>
                How much does FlixList cost?
              </AccordionHeader>
              <AccordionItem
                accordionid="1"
                className={close1 ? "faq-ans" : "display-content"}
              >
                FlixList is a free service! Just hit the Sign Up button and
                create your account. It's that simple!
              </AccordionItem>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2" onClick={this.toggle2}>
                How is FlixList different from just searching directly in
                streaming services like Newflix or Amazon Prime?
              </AccordionHeader>
              <AccordionItem
                accordionid="2"
                className={close2 ? "faq-ans" : "display-content"}
              >
                FlixList is a one-stop shop! We can search for entertainment you
                never even considered based on your Entertainment 'personality'.
                We scour all the top streaming services including HBO Max, Hulu,
                AppleTV+, Disney+, Amazon Prime, Amazon Video, Netflix, iTunes,
                Showtime Anytime, CSB All Access, Peacock, Content.
              </AccordionItem>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3" onClick={this.toggle3}>
                How often should I take the Entertainment Personality Quiz?
              </AccordionHeader>
              <AccordionItem
                accordionid="3"
                className={close3 ? "faq-ans" : "display-content"}
              >
                Anytime you want to refresh your Entertainment Viewing Bucket!
                Your binge watching mood will never be the same, so why should
                your movie and TV options? Answer a few simple questions in your
                quiz and let FlixList do the rest! Your Bucket will fill up with
                viewing options so you can get your flix binge on!
              </AccordionItem>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4" onClick={this.toggle4}>
                How do I add movies and TV shows to my favorites page?
              </AccordionHeader>
              <AccordionItem
                accordionid="4"
                className={close4 ? "faq-ans" : "display-content"}
              >
                Once you have completed your Entertainment Personality Quiz,
                your Entertainment Bucket page will fill up with recommended
                movies and TV shows. Click the star button to add your top picks
                to Your Favorites page!
              </AccordionItem>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
      </>
    );
  }
}
export default Home;
