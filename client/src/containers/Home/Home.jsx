import React from "react";
import AdvancedSearch from "../../components/AdvancedSearch/AdvancedSearch";
// import CardSummary from "../../components/CardSummary/CardSummary";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container-fluid" id="search-container">
        <AdvancedSearch />
        {/* <CardSummary /> */}
      </div>
    </>
  );
};

export default Home;
