import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import {
  Button,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      movie_id: null,
      fav_id: null,
    },
    (this.id_match = this.id_match.bind(this))
  }
  componentDidMount() {
    this.readFavorites();
  }

  componentWillUnmount

  readFavorites = () => {
    fetch("/favorites")
      .then((response) => response.json())
      .then((payload) => this.setState({ favorites: payload }))
      .catch((errors) => console.log("favorites index errors:", errors));
  };

  removeMovieId = () => {
    this.setState({movie_id: null})
    console.log("movie id cleared.", this.state.movie_id);
  };
  

  id_match = (id) => {
    this.setState({movie_id: id})
    this.state.favorites.map(data => {
      {if(this.state.movie_id === data.movie_id){
        this.props.deleteFavorite(data.id, data.movie_id, data.user_id)
        this.removeMovieId()
      }}
    })
  }

  render() {
    const { movies, current_user } = this.props;
    const { fave_data } = this.state;

    return (
      <div className="body-container">
        <h1 id="faves-h1">Your Favorites</h1>
        <div className="favorites-body">
        {movies &&
          movies.map((mov) => {
            return (
              <Card key={mov.id} color="dark" inverse className="bucket-card">
                <CardImg
                  alt="Card image cap"
                  src={mov.img}
                  top
                  width="100%"
                  id="card-img"
                />
                <CardBody>
                  <CardTitle tag="h5">{mov.title}</CardTitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Genre: {mov.genre}
                    <br />
                    Runtime: {mov.runtime}
                  </CardSubtitle>

                  <Button
                    color="danger"
                    onClick={() => this.id_match(mov.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Remove
                  </Button>
                </CardBody>
              </Card>
            );
          })}
          </div>
      </div>
    );
  }
}
export default Favorites;
