import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import "./Search.css";
import pokemon from "pokemontcgsdk";

// POKEMON CARD API KEY
pokemon.configure({ apiKey: "bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b" });

// import { set } from "mongoose";

const AdvancedSearch = () => {
  const [setList, setSetList] = useState([]);
  const [setSearch, setSetSearch] = useState("base1");
  const [cardType, setCardType] = useState("all");
  const [cardSearch, setCardSearch] = useState();
  const [placeholder, setPlaceholder] = useState();

  // AXIOS CALL WHEN PAGE LOADS
  useEffect(() => {
    pokemon.set.all().then((sets) => {
      setSetList(sets);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="fluid-container">
        <div className="row search-bar-row no-gutters">
          {/* SEARCH BAR */}
          <div id="card-search-container" className="col-lg-3 search-container">
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
                }}
              >
                <option defaultValue value="all">
                  All Cards
                </option>
                <option data-placeholder="Nidoking" value="pokemon">
                  Pokemon Only
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
                to={`/search/results/${cardType}/${cardSearch}&page=1`}
              >
                Search
              </Link>
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
                  return(
                  <option value={sets.id}>{sets.name}</option>
                  )
                })}
              </select>
              {/* <button className="btn btn-primary" onClick={getSets}>
            Search
          </button> */}
              <Link
                className="btn btn-danger"
                to={`/search/set/${setSearch}&page=1`}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedSearch;
