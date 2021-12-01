import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: null,
      tv_show: null,
      submitted: false,
    };
    (this.onChangeValueGenre = this.onChangeValueGenre.bind(this)),
      (this.onChangeValueType = this.onChangeValueType.bind(this));
  }

  onChangeValueType(e) {
    console.log(e.target.value);
    this.setState({ tv_show: e.target.value });
  }
  
  onChangeValueGenre(e) {
    console.log(e.target.value);
    this.setState({ genre: e.target.value });
  }

  onChangeValueReleaseDate(e) {
    console.log(e.target.value);
    this.setState({ release_date: e.target.value });
  }

  onChangeValueRunTime(e) {
    console.log(e.target.value);
    this.setState({ runtime: e.target.value });
  }

  handleSubmit = () => {
    this.props.populateBucket(this.state.genre, this.state.tv_show);
    console.log("submitted");
    this.setState({ submitted: true });
  };

  render() {
    console.log(this.state);
    return (
      <div className="body-container">
        <h2>Entertainment Personality Quiz</h2>
        <br />
        <div className="quiz-container">

        <div id="question1">
        <Form onChange={this.onChangeValueType}>
          <FormGroup tag="fieldset">
            <legend>Whatcha feeling today?... Movie or Tv Show?</legend>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" value={"false"} />{" "}
            <Label check>Movie</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" value={"true"} />{" "}
            <Label check>TV Show</Label>
          </FormGroup>
        </Form>
        </div>

        <div id="question2">
        <Form onChange={this.onChangeValueGenre}>
          <FormGroup tag="fieldset">
            <legend>What genre are you in the mood for?</legend>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" value="action" name="genre-btn" />{" "}
            <Label check>Stress me out with some action</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" value="comedy" name="genre-btn" />{" "}
            <Label check>I wanna laugh all my worries away</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" value="drama" name="genre-btn" />{" "}
            <Label check>I’m all about the drama</Label>
          </FormGroup>
          <FormGroup check>
            <Input type="radio" value="horror" name="genre-btn" />{" "}
            <Label check>Scare me if you can...I dare you!</Label>
          </FormGroup>
        </Form>
        </div>

        <div id="question3">
        <Form onChange={this.onChangeValueReleaseDate}>
          <FormGroup tag="fieldset">
            <legend>How far back are we going?</legend>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" value={"false"} />{" "}
            <Label check>Gimme some vintage flix (1960-1980s)</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" value={"true"} />{" "}
            <Label check>Fairly recent (1990-2020)</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" value={"true"} />{" "}
            <Label check>Newest releases (2021)</Label>
          </FormGroup>
        </Form>
        </div>

        <div id="question4">
        <Form onChange={this.onChangeValueRunTime}>
          <FormGroup tag="fieldset">
            <legend>How long you got to watch?</legend>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" value={""} />
            <Label check>Not much time. Keep it short.</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" value={""} />
            <Label check>I got all night babeeeyy!</Label>
          </FormGroup>
        </Form>
        </div>
      </div>
        <Button color="danger" onClick={this.handleSubmit}>
          Start Your Binge!
        </Button>
        {this.state.submitted && <Redirect to="/bucket" />}
        
      </div>
    );
  }
}
export default Quiz;
