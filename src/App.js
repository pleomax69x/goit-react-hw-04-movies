import { Route, Switch, Redirect } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import NotFoundPage from "./Pages/NotFoundPage";
import AppBar from "./components/AppBar/AppBar";
import "./App.css";

const HomePage = lazy(() =>
  import("./Pages/HomePage.js" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import("./Pages/MoviesPage.js" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Pages/MovieDetailsPage.js" /* webpackChunkName: "MovieDetailsPage" */
  )
);

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:moviesId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          {/* <Route component={NotFoundPage} /> */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
