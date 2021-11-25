import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, UncontrolledAccordion, AccordionItem, AccordionHeader } from "reactstrap";

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
          <h3 className="pitch-left">
            Ugh! That feeling when you’re sure you’ve watched every movie or TV
            series on the world wide web...
          </h3>
          <br />
          <h3 className="pitch-right">
            But there is no way Hollywood would leave you stranded like that!
          </h3>
          <br />
          <br />
          <h4 className="pitch-left">
            Entertainment Personality Quiz: Let FlixList scour all the top
            streaming services based on YOUR entertainment personality.
          </h4>
          <br />
          <h4 className="pitch-right">
            {" "}
            Your Viewing Bucket: FlixList will make sure your Entertainment
            bucket is never empty.
          </h4>
          <br />
          <h4 className="pitch-left">It’s that easy! So stop the endless surfing...</h4>
          <br />
          <h4 className="pitch-right">
            Flixlist makes it so you don’t have to waste time, while wasting
            time.
          </h4>
          <br />
          <Button color="danger" id="home-signup-button">
            <a href={new_user_route}>Sign Up</a>
          </Button>
        </div>
        <div id="faq">
          <h1>Frequently asked questions</h1>
          <UncontrolledAccordion defaultOpen={["1", "2", "3", "4"]} stayOpen id="faq-content">
            <AccordionItem className="faq-q-tab">
              <AccordionHeader targetId="1">How much does FlixList cost</AccordionHeader>
              <AccordionItem accordionid="1">
              FlixList is a free service! Just hit the Sign Up button and create your account. It's that simple!
              </AccordionItem>
            </AccordionItem>
            <AccordionItem className="faq-q-tab">
              <AccordionHeader targetId="2">How is FlixList different from just searching directly in streaming services like Newflix or Amazon Prime?</AccordionHeader>
              <AccordionItem accordionid="2">
              FlixList is a one-stop shop! We can search for entertainment you never even considered based on your Entertainment 'personality'. We scour all the top streaming services including HBO Max, Hulu, AppleTV+, Disney+, Amazon Prime, Amazon Video, Netflix, iTunes, Showtime Anytime, CSB All Access, Peacock, Content.
              </AccordionItem>
            </AccordionItem>
            <AccordionItem className="faq-q-tab">
              <AccordionHeader targetId="3">How often should I take the Entertainment Personality Quiz?</AccordionHeader>
              <AccordionItem accordionid="3">
              Anytime you want to refresh your Entertainment Viewing Bucket! Your binge watching mood will never be the same, so why should your movie and TV options? Answer a few simple questions in your quiz and let FlixList do the rest! Your Bucket will fill up with viewing options so you can get your flix binge on!
              </AccordionItem>
            </AccordionItem>
            <AccordionItem className="faq-q-tab">
              <AccordionHeader targetId="4">How do I add movies and TV shows to my favorites page?</AccordionHeader>
              <AccordionItem accordionid="4">
              Once you have completed your Entertainment Personality Quiz, your Entertainment Bucket page will fill up with recommended movies and TV shows. Click the star button to add your top picks to Your Favorites page!
              </AccordionItem>
            </AccordionItem>
          </UncontrolledAccordion>
        </div>
      </>
    );
  }
}
export default Home;
