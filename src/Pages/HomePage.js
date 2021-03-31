// import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import searchAPI from "../components/searchApi";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    searchAPI.trending().then((res) => {
      this.setState({ movies: res.data.results });
    });
  }
  render() {
    return (
      <>
        <h2>Trending Today</h2>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.original_title} {movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
