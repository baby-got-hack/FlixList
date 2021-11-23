import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Favorites from "./pages/Favorites";
import Quiz from "./pages/Quiz";
import Bucket from "./pages/Bucket";
import NotFound from "./pages/NotFound";


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
          <Switch>
            <Route exact path="/" render={() => <Home {...this.props} />} />
            {logged_in && <Route path="/aboutus" component={AboutUs} />}
            {logged_in && <Route path="/favorites" component={Favorites} />}
            {logged_in && <Route path="/quiz" component={Quiz} />}
            {logged_in && <Route path="/bucket" component={Bucket} />}
            <Route component={NotFound} />
          </Switch>
          
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
