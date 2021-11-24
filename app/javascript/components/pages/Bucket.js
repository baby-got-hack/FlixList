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
      form: {
        movie_id: this.props.movies.id,
        user_id: this.props.current_user.id,
      },
      submitted: false,
    };
  }

  handleSubmit = () => {
    this.props.createFavorite(this.state.form);
    this.setState({ submitted: true });
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

                          <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Genre: {movie.genre}
                            <br />
                            Runtime: {movie.runtime}
                          </CardSubtitle>
                          <Button color="warning" onClick={this.handleSubmit}>
                            <FontAwesomeIcon
                              icon={faStar}
                              style={{ color: "#FFE401" }}
                            />{" "}
                            Add to Favorites
                          </Button>
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
