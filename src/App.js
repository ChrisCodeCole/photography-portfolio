import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import MainPage from "./components/MainPage";
import LoadingPage from "./components/LoadingPage";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  updateLoadingState = newIsLoading => {
    this.setState({ isLoading: newIsLoading });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <MainPage
                  isLoading={this.state.isLoading}
                  updateLoadingState={this.updateLoadingState}
                />
              )}
            />
            <Route
              path="/about"
              component={AboutPage}
              isLoading={this.state.isLoading}
              updateLoadingState={this.updateLoadingState}
            />
          </Switch>
          {this.state.isLoading && <LoadingPage />}
        </div>
      </Router>
    );
  }
}
