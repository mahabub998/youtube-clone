import React from "react";
import "./App.css";
import Header from "./Copmonents/Header/Header";
import Home from "./Copmonents/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Header />
    //  <div className="app_page">
    //  <Sidebar />
    //  <VideoShow />
    //  </div>
    // </div>
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <h1>search page </h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
