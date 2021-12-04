import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Skils from "./components/skills/Skils";

import Main from "./components/main/Main";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skils" component={Skils} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
