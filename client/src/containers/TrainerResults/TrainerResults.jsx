import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
// import CardSummary from "../../components/CardSummary/CardSummary";
import CardSummaryTest from "../../components/CardSummaryTest/CardSummaryTest";
import Navbar from "../../components/Navbar/Navbar";

const Results = () => {
  const entrySearch = useParams();
  const [cards, setCards] = useState([]);
  const [cardTotal, setCardTotal] = useState();
  // const [superType, setSuperType] = useState([]);

  const paginationNumbers = [];

  const getSearchResults = async () => {
    console.log(entrySearch);
    const query =
      "https://api.pokemontcg.io/v2/cards?q=supertype:trainer name:" +
      entrySearch.search +
      "&page=" +
      entrySearch.pageNum +
      "&pageSize=10&X-Api-Key=bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b";
    axios
      .get(query)
      .then((response) => {
        console.log(response.data.data);
        setCards(response.data.data);
        setCardTotal(response.data.totalCount);
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

  for (let i = 1; i <= Math.ceil(cardTotal / 10); i++) {
    paginationNumbers.push(
      <li className="page-item">
        <a
          className="page-link"
          href={"/results/trainer/" + entrySearch.search + "&page=" + i}
        >
          {i}
        </a>
      </li>
    );
  }

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
      <div className="container">
        {/* <CardSummary cards={cards} /> */}
        <CardSummaryTest cards={cards} />
        <nav aria-label="Page navigation">
          <ul className="pagination">{paginationNumbers}</ul>
        </nav>
      </div>
    </>
  );
};

export default Results;
