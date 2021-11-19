import React, { Component } from "react";
import movies from "../mockMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardImg,
  CardBody,
  CardGroup,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class Bucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
    };
  }
  render() {
    return (
      <>
        <div className="body-container">
          <h1>Your Personalized Entertainment Bucket</h1>
          {this.state.movies &&
            this.state.movies.map((movie) => {
              return (
                <>
                  <Card key={movie.id} color="dark" inverse>
                    <CardImg
                      alt="Card image cap"
                      src={movie.img}
                      top
                      width="100%"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{movie.title}</CardTitle>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#FFE401" }}
                      />

                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Genre: {movie.genre}
                        <br />
                        Runtime: {movie.runtime}
                      </CardSubtitle>
                      <Button>Add to Favorites</Button>
                    </CardBody>
                  </Card>
                </>
              );
            })}
        </div>
      </>
    );
  }
}
export default Bucket;
