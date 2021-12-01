import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
} from "reactstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Bucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  handleSubmit = (movie_id) => {
    this.props.createFavorite(movie_id, this.props.current_user.id);
    this.setState({ submitted: true });
    console.log("Saved to favorites!");
  };

  render() {
    return (
      <>
        <div className="body-container">
          <h1>Your Personalized Entertainment Bucket</h1>
          <div className="bucket-body">
            {this.props.movies &&
              this.props.movies.map((movie) => {
                return (
                    <Card key={movie.id} color="dark" inverse className="bucket-card">
                      <CardImg
                        alt="Card image cap"
                        src={movie.img}
                        top
                        width="100%"
                        id="card-img"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{movie.title}</CardTitle>

                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                          Genre: {movie.genre}
                          <br />
                          Runtime: {movie.runtime} mins
                        </CardSubtitle>
                        <Button
                          color="warning"
                          onClick={() => this.handleSubmit(movie.id)}
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                          />{" "}
                          Add to Favorites
                        </Button>
                      </CardBody>
                    </Card>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Bucket;
