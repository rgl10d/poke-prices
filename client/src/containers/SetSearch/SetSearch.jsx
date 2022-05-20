import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import SearchResults from "../../components/SearchResults/SearchResults";
import Navbar from "../../components/Navbar/Navbar";
// import pokemon from "pokemontcgsdk";

const SetSearch = () => {
  const entrySearch = useParams();
  const [cards, setCards] = useState([]);
  const [cardTotal, setCardTotal] = useState();

  const paginationNumbers = [];
  const currentPage = window.location.pathname.split("=");


  const getSearchResults = () => {
    console.log(entrySearch);

    const query =
      "https://api.pokemontcg.io/v2/cards?q=set.id:" +
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

  // PAGINATION FOR LOOP TO CREATE PAGE NUMBERS
  for (let i = 1; i <= Math.ceil(cardTotal / 10); i++) {
    // IF STATEMENT TO DETERMINE CURRENT PAGE AND HIGHLIGHT IT
    if (parseInt(currentPage[1]) === i) {
      paginationNumbers.push(
        <li className="page-item active">
          <a
            className="page-link"
            href={"/set/" + entrySearch.search + "&page=" + i}
          >
            {i}
          </a>
        </li>
      );
    } else {
      paginationNumbers.push(
        <li className="page-item">
          <a
            className="page-link"
            href={"/set/" + entrySearch.search + "&page=" + i}
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
        <SearchResults cards={cards} />
        <nav aria-label="Search results pages">
          <ul className="pagination justify-content-center">
            {paginationNumbers}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SetSearch;
