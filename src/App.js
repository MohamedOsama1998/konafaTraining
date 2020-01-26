import React from "react";
import "./App.css";

// Tools
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

// Layout
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
