import React from "react";
import "./App.css";
import "antd/dist/antd.css";

// Tools
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

// Pages

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <p>Hello</p>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
