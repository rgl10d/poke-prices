import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./containers/Details/Details.jsx";
import Home from "./containers/Home/Home.jsx";
import Search from "./containers/Search/Search.jsx";
import TrainerResults from "./containers/TrainerResults/TrainerResults";
import PokemonResults from "./containers/PokemonResults/PokemonResults";
import EnergyResults from "./containers/EnergyResults/EnergyResults";
import SetResults from "./containers/SetResults/SetResults";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/results/pokemon/:search&page=:pageNum" component={PokemonResults} />
        <Route exact path="/results/trainer/:search&page=:pageNum" component={TrainerResults} />
        <Route exact path="/results/energy/:search&page=:pageNum" component={EnergyResults} />
        <Route exact path="/results/set/:search&page=:pageNum" component={SetResults} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
