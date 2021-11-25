import React, { Component } from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap";

class Favorites extends Component {
  render() {
    const { favorites, movie, current_user } = this.props;
    console.log(favorites);
    return (
      <div className="body-container">
        <h1>This is the favorites page</h1>
        {favorites.map(favorites => favorites.map(fav => 
          { {fav.id === fav.movie_id && fav.user_id === current_user.id} return fav}
          ))}
      </div>
    );
  }
}
export default Favorites;
{/* {favorites &&
  favorites.map((favorites) => {
    return (
      <CardGroup>
        <Card
          key={favorites.movie_id}
          color="dark"
          inverse
          className="bucket-card"
        >
          <CardImg
            alt="Card image cap"
            src={favorites.img}
            top
            width="100%"
            id="card-img"
          />
          <CardBody>
            <CardTitle tag="h5">{favorites.title}</CardTitle>

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Genre: {favorites.genre}
              <br />
              Runtime: {favorites.runtime}
            </CardSubtitle>
          </CardBody>
        </Card>
      </CardGroup>
    );
  })} */}
