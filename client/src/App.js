import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./containers/Details/Details.jsx";
import Home from "./containers/Home/Home.jsx";
import Search from "./containers/Search/Search.jsx";
import SearchResults from "./containers/SearchResults/SearchResults.jsx";
import SetResults from "./containers/SetResults/SetResults";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/search/results/:cardType/:search&page=:pageNum" component={SearchResults} />
        <Route exact path="/search/set/:search&page=:pageNum" component={SetResults} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
