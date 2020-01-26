import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import MainPage from "./components/MainPage";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
