import React from "react";
import AdvancedSearch from "../../components/AdvancedSearch/AdvancedSearch";
import Navbar from "../../components/Navbar/Navbar";

const Search = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <AdvancedSearch />
      </div>
    </>
  );
};

export default Search;
