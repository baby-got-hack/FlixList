import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
} from "reactstrap";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

class Bucket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      inactive: "Add to Favorites",
      active: "Added!",
      added0: false,
      added1: false,
      added2: false,
      added3: false,
      added4: false,
      added5: false,
    };
  }

  indexChecker = (index) => {
    if(index === 0){
      this.setState({added0: true})
    } else if(index === 1){
      this.setState({added1: true})
    }else if(index === 2){
      this.setState({added2: true})
    }else if(index === 3){
      this.setState({added3: true})
    }else if(index === 4){
      this.setState({added4: true})
    }else if(index === 5){
      this.setState({added5: true})
    }
    
  }

  handleSubmit = (movie_id) => {
    this.setState({ submitted: true });
    console.log(this.state.submitted);
    this.props.createFavorite(movie_id, this.props.current_user.id);
  };

  render() {
    const { inactive, active, added0, added1, added2, added3, added4, added5, submitted} = this.state
    return (
      <>
        <div className="body-container">
          <h1>Your Personalized Entertainment Bucket</h1>
          <div className="bucket-body">
            {this.props.movies &&
              this.props.movies.map((movie, index) => {
                return (
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
                      <Button
                      key={movie.id}
                        color="warning"
                        onMouseDown={() => this.indexChecker(index)}
                        onClick={() => this.handleSubmit(movie.id)}
                      >
                        {submitted ? active : inactive}
                      </Button>
                    </CardBody>
                  </Card>
                );
              })}
          </div>
          <NavLink to="/yourfavorites">
            <Button color="danger">Go To Favorites</Button>
          </NavLink>
        </div>
      </>
    );
  }
}
export default Bucket;
