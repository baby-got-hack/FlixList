import React, { Component } from "react";

class Quiz extends Component {

    constructor(props){
      super(props)
      this.state = {
        media: null
      }
    }
    
  render() {
    return (
      <>
        <h1>This is the quiz page</h1>

        <Form>
          <FormGroup tag="fieldset">
            <legend>Radio Buttons</legend>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" />{" "}
              <Label check>
                Movie
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" />{" "}
              <Label check>
                TV Series
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input name="radio1" type="radio" />{" "}
              <Label check>
                Both
              </Label>
            </FormGroup>
          <Button>Start your binge!</Button>
        </Form>
      </>
    );
  }
}
export default Quiz;
