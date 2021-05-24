import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./containers/Details/Details.jsx";
import Home from "./containers/Home/Home.jsx";
import Search from "./containers/Search/Search.jsx";
import Results from "./containers/Results/Results.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
