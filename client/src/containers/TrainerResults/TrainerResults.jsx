import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CardSummary from "../../components/CardSummary/CardSummary";
import Navbar from "../../components/Navbar/Navbar";

const Results = () => {
  const entrySearch = useParams();
  const [cards, setCards] = useState([]);
  // const [superType, setSuperType] = useState([]);

  const getSearchResults = async () => {
    console.log(entrySearch);
    const query =
      "https://api.pokemontcg.io/v2/cards?q=supertype:trainer name:" + entrySearch.search;
    axios
      .get(query)
      .then((response) => {
        console.log(response.data.data);
        setCards(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // AXIOS CALL WHEN PAGE LOADS
  useEffect(() => {
    getSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <select
        className="custom-select scrollable-menu"
        id="set-dropdown"
        onChange={(e) => setSuperType(e.target.value)}
      >
        <option defaultValue value="pokemon">
          Pokemon
        </option>
        <option value="trainer">Trainer</option>
        <option value="energy">Energy</option>
      </select> */}
      <Navbar />
      <CardSummary cards={cards} />
    </>
  );
};

export default Results;
