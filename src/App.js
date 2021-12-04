import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Navbar from "./components/nav/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skils";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
