import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/logo/pokePrices.png";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="jumbotron">
          <img src={logo} alt="PokePrices Logo" id="home-logo" />
          <hr className="my-4" />
          <Link className="btn btn-primary btn-lg" id="enter-button" to="/search">
            Enter
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
