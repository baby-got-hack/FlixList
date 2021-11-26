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
      fave_data: [],
      movie_id: null,
      fav_id: null,
    };
  }
  componentDidMount() {
    this.readFaveData();
  }

  readFaveData = () => {
    fetch("/favorites")
      .then((response) => response.json())
      .then((payload) => this.setState({ fave_data: payload }))
      .catch((errors) => console.log("favorites index errors:", errors));
  };

  handleSubmit = (id) => {
    console.log("Favorite deleted", id);
  };

  id_match = (id) => {
    this.setState({ movie_id: id})
  }

  render() {
    const { favorites, current_user } = this.props;
    const { fave_data } = this.state;
    console.log("favorites:", favorites, "fave_data", fave_data);
    console.log(this.state);
    return (
      <div className="body-container">
        <h1>This is the favorites page</h1>
        {favorites &&
          favorites.map((fav) => {
            return (
              <Card key={fav.id} color="dark" inverse className="bucket-card">
                <CardImg
                  alt="Card image cap"
                  src={fav.img}
                  top
                  width="100%"
                  id="card-img"
                />
                <CardBody>
                  <CardTitle tag="h5">{fav.title}</CardTitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Genre: {fav.genre}
                    <br />
                    Runtime: {fav.runtime}
                  </CardSubtitle>

                  <Button
                    color="danger"
                    onClick={() => this.id_match(fav.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Remove
                  </Button>
                </CardBody>
              </Card>
            );
          })}
      </div>
    );
  }
}
export default Favorites;
