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
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favorites: [],
      fave_data: []
    };
  }
  componentDidMount() {
    this.readMovies(), this.readFavoriteMovieData(), this.readFavorites();
  }

  readFavorites = () => {
    fetch("/favorites")
      .then((response) => response.json())
      .then((payload) => this.setState({ favorites: payload }))
      .catch((errors) => console.log("favorites index errors:", errors));
  };

  readMovies = (genre, tv_show) => {
    fetch(`/movies?genre=${genre}&tv_show=${tv_show}`)
      .then((response) => response.json())
      .then((payload) => this.setState({ movies: payload }))
      .catch((errors) => console.log("movie index errors:", errors));
  };

  readFavoriteMovieData = () => {
    fetch("/favorites/movie_data")
      .then((response) => response.json())
      .then((payload) => this.setState({ fave_data: payload }))
      .catch((errors) => console.log("favorites index errors:", errors));
  };

  createFavorite = (movie_id, user_id) => {
    fetch("/favorites", {
      body: JSON.stringify({ movie_id, user_id }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status === 422) {
          alert("There is something wrong with your submission.");
        }
        return response.json();
      })
      .then(() => this.readFavorites())
      .catch((errors) => console.log("create favorite errors:", errors));
  };

  deleteFavorite = (id, movie_id, user_id) => {
    fetch(`favorites/${id}`, {
      body: JSON.stringify({ movie_id, user_id }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE"
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Something went wrong with this deletion.");
        }
        return response.json();
      })
      .then(() => this.readFavorites())
      .catch((errors) => console.log("delete errors:", errors));
  };

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
            <Route path="/aboutus" component={AboutUs} />
            {logged_in && (
              <Route
                path="/yourfavorites"
                render={(props) => {
                  return (
                    <Favorites
                      movies={this.state.fave_data}
                      current_user={current_user}
                      deleteFavorite={this.deleteFavorite}
                    />
                  );
                }}
              />
            )}
            {logged_in && (
              <Route
                path="/quiz"
                render={() => {
                  return <Quiz populateBucket={this.readMovies} />;
                }}
              />
            )}
            {logged_in && (
              <Route
                path="/bucket"
                render={() => {
                  return (
                    <Bucket
                      createFavorite={this.createFavorite}
                      movies={this.state.movies}
                      current_user={current_user}
                    />
                  );
                }}
              />
            )}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
