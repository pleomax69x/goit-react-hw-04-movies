import { Component } from "react";
import searchAPI from "../components/searchApi";

class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    searchAPI
      .movieCredits(this.props.match.params.moviesId)
      .then((res) => {
        this.setState({ cast: res.data.cast });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <h2>Cast</h2>
        {this.state.cast && (
          <ul>
            {this.state.cast.map((cas) => (
              <li key={cas.cast_id}>
                <p>{cas.name} </p>
                <img
                  src={
                    cas.profile_path &&
                    `https://image.tmdb.org/t/p/original${cas.profile_path}`
                  }
                  alt={cas.name}
                  className=""
                  width="150"
                />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
