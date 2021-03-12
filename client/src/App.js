import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home.jsx";
import Search from "./containers/Search/Search.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
