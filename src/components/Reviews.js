import { Component } from "react";
import searchAPI from "../components/searchApi";

class Reviews extends Component {
  state = {
    reviwes: [],
  };
  componentDidMount() {
    searchAPI
      .movieReviev(this.props.match.params.moviesId)
      .then((res) => {
        this.setState({ reviwes: res.data.results });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const text = "We don't have any rewiews for this movie";
    return (
      <>
        <h2>Reviews</h2>
        {this.state.reviwes.length > 0 ? (
          <ul>
            {this.state.reviwes.map((rev) => (
              <li key={rev.id}>
                <p>Author: {rev.author} </p>
                <p>{rev.content} </p>
              </li>
            ))}
          </ul>
        ) : (
          text
        )}
      </>
    );
  }
}

export default Reviews;
