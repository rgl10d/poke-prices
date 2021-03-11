import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        PokéPrices
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-buttons"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav-buttons">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">My Cards</a>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
