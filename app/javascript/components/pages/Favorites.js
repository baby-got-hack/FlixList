import React, { Component } from "react";

class Favorites extends Component {
  render() {
    return (
      <>
        <div className="body-container">
          <>
          <h1>This is the favorites page</h1>
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
                        </CardBody>
                      </Card>
                    </CardGroup>
          </>
        </div>
      </>
    );
  }
}
export default Favorites;
