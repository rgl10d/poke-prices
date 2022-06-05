import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import "./Home.css";
import pokemon from "pokemontcgsdk";

// POKEMON CARD API KEY
pokemon.configure({ apiKey: "bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b" });

// import { set } from "mongoose";

const Home = () => {
  const [setList, setSetList] = useState([]);
  const [setSearch, setSetSearch] = useState("base1");
  const [cardType, setCardType] = useState("all");
  const [cardSearch, setCardSearch] = useState("bulbasaur");
  const [searchThemeState, setSearchThemeState] = useState(
    "col-lg-6 card-search-container-all"
  );
  const [placeholder, setPlaceholder] = useState();
  const [searchContainerCardState, setSearchContainerCardState] = useState();
  const [searchContainerCardAlt, setSearchContainerCardAlt] = useState();

  useEffect(() => {
    // GENERATE RANDOM NUMBER
    const randomPokedexNum = Math.floor(Math.random() * 150) + 1;

    // GET LIST OF ALL CARD SETS ON PAGE LOAD
    pokemon.set.all().then((sets) => {
      setSetList(sets);
    });

    // GET RANDOM POKEMON CARD
    pokemon.card
      .where({
        q:
          "supertype:pokemon nationalPokedexNumbers:[" +
          randomPokedexNum +
          " TO " +
          randomPokedexNum +
          "]",
        pageSize: 3
      })
      .then((randomCard) => {
        setSearchContainerCardState(randomCard.data[0].images.small);
        setSearchContainerCardAlt(randomCard.data[0].name);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // FUNCTION CHANGES THE CLASS/BACKGROUND OF THE CARD SEARCH CONTAINER
  const handleSearchTheme = (event) => {
    if (event.target.value === "pokemon") {
      setSearchThemeState("col-lg-6 card-search-container-pokemon-only");
    } else if (event.target.value === "trainer") {
      setSearchThemeState("col-lg-6 card-search-container-trainer-only");
    } else if (event.target.value === "energy") {
      setSearchThemeState("col-lg-6 card-search-container-energy-only");
    } else {
      setSearchThemeState("col-lg-6 card-search-container-all");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row search-bar-row no-gutters">
          {/* SEARCH BAR */}
          <div id="card-search-container" className={searchThemeState}>
            <h2>Card Search</h2>
            <div className="input-group mb-3">
              <select
                className="scrollable-menu"
                id="card-type-selection"
                onChange={(e) => {
                  setPlaceholder(
                    e.target[e.target.selectedIndex].getAttribute(
                      "data-placeholder"
                    )
                  );
                  setCardType(e.target.value);
                  handleSearchTheme(e);
                }}
              >
                <option defaultValue value="all">
                  All Cards
                </option>
                <option data-placeholder="Nidoking" value="pokemon">
                  Pokémon Only
                </option>
                <option data-placeholder="Brock" value="trainer">
                  Trainer Only
                </option>
                <option data-placeholder="Water" value="energy">
                  Energy Only
                </option>
              </select>
              <input
                id="card-search"
                type="text"
                name="card search"
                placeholder={placeholder}
                onChange={(e) => setCardSearch(e.target.value)}
              />
              {/* <button className="btn btn-primary" onClick={getSets}>
            Search
          </button> */}
              <Link
                className="btn btn-danger"
                to={`/card/${cardType}/${cardSearch}&page=1`}
              >
                Search
              </Link>
              <img src={searchContainerCardState} alt={searchContainerCardAlt} />
            </div>
          </div>

          {/* SET SEARCH DROPDOWN */}
          <div className="container">
            <h2>Set Search</h2>
            <div className="input-group mb-3">
              <select
                className="custom-select scrollable-menu"
                id="set-dropdown"
                onChange={(e) => setSetSearch(e.target.value)}
              >
                {setList.map((sets) => {
                  return <option value={sets.id}>{sets.name}</option>;
                })}
              </select>
              {/* <button className="btn btn-primary" onClick={getSets}>
            Search
          </button> */}
              <Link className="btn btn-danger" to={`/set/${setSearch}&page=1`}>
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
