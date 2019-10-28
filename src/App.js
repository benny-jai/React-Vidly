import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./customer";
import Rentals from "./components/reantals";
import NotFound from "./components/NotFound";
import NavBar from "./components/navBar";
import "./App.css";
import Reantals from "./components/reantals";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies" component={Movies} />
            <Route path="/customer" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
