import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./containers/Details/Details.jsx";
import Home from "./containers/Home/Home.jsx";
// import Search from "./containers/Search/Search.jsx";
import Login from "./containers/Login/Login.jsx";
import CardSearch from "./containers/CardSearch/CardSearch.jsx";
import SetSearch from "./containers/SetSearch/SetSearch.jsx";
import UserProfile from "./containers/UserProfile/UserProfile.jsx";
import PackSimulator from "./containers/PackSimulator/PackSimulator.jsx";
import PackSelect from "./containers/PackSelect/PackSelect.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/search" component={Search} /> */}
        <Route exact path="/card/:cardType/:search&page=:pageNum" component={CardSearch} />
        <Route exact path="/set/:search&page=:pageNum" component={SetSearch} />
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/packsim" component={PackSelect} />
        <Route exact path="/packsim/:setid" component={PackSimulator} />
      </Switch>
    </Router>
  );
}

export default App;
