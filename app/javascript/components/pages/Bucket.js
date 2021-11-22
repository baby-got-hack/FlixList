import React, { Component } from "react";
import movies from "../mockMovies";
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
      movies: movies,
    };
  }
  render() {
    return (
      <>
        <div className="body-container">
          <h1>Your Personalized Entertainment Bucket</h1>
          <div className="bucket-body">
            {this.state.movies &&
              this.state.movies.map((movie) => {
                return (
                  <>
                    <CardGroup>
                      <Card
                        key={movie.id}
                        color="dark"
                        inverse
                        className="bucket-card"
                      >
                        <CardImg
                          alt="Card image cap"
                          src={movie.img}
                          top
                          width="100%"
                          id="card-img"
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
                    </CardGroup>
                  </>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Bucket;
