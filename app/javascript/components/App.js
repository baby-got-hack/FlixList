import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
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
        <Router>
          <Header {...this.props} />
        </Router>
        <h1>Welcome to FlixList</h1>
      </>
    );
  }
}

export default App;
