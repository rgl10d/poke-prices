import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardSummary from "../../components/CardSummary/CardSummary.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

const SearchResults = () => {
  const params = useParams();
  const [cards, setCards] = useState([]);
  const [cardTotal, setCardTotal] = useState();
  // PAGINATION VARIABLES
  const pageNumArr = [];
  const currentPage = window.location.pathname.split("=");

  // CARD API CALL
  const getSearchResults = async () => {
    console.log(params);
    const query =
      "https://api.pokemontcg.io/v2/cards?q=supertype:" +
      params.cardType +
      " name:" +
      params.search +
      "&page=" +
      params.pageNum +
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

  // PAGINATION FOR-LOOP TO CREATE PAGE NUMBERS
  for (let i = 1; i <= Math.ceil(cardTotal / 10); i++) {
    // IF STATEMENT TO DETERMINE CURRENT PAGE AND HIGHLIGHT IT
    if (parseInt(currentPage[1]) === i) {
      pageNumArr.push(
        <li className="page-item active">
          <a
            className="page-link"
            href={"/search/results/" + params.cardType + "/" + params.search + "&page=" + i}
          >
            {i}
          </a>
        </li>
      );
    } else {
      pageNumArr.push(
        <li className="page-item">
          <a
            className="page-link"
            href={"/search/results/" + params.cardType + "/" + params.search + "&page=" + i}
          >
            {i}
          </a>
        </li>
      );
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <CardSummary cards={cards} />
        <nav aria-label="Search results pages">
          <ul className="pagination justify-content-center">{pageNumArr}</ul>
        </nav>
      </div>
    </>
  );
};

export default SearchResults;
