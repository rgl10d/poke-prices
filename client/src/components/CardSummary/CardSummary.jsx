import React from "react";
import "./CardSummary.css";
import { Link } from "react-router-dom";

const CardSummaryTest = (props) => {
  return (
    <>
      {props.cards.map((cards) => {
        // DETAILS LINK FOR EACH CARD
        return (
          <div className="row result-rows">
            <div className="result-img-div col-lg-3">
              <img
                className="card-images-test"
                alt={cards.name}
                src={cards.images.small}
                key={cards.id}
              />
            </div>
            <div className="result-info col-lg-6">
              <p className="card-name-test">{cards.name}</p>
              <p className="set-and-rarity-test">
                {cards.set.name}
                <img
                  className="set-symbol-test"
                  alt={cards.set.name}
                  src={cards.set.images.symbol}
                />
              </p>
              <p>{cards.rarity}</p>
              <Link
                className="btn btn-primary btn-lg details-button"
                to={`/details/${cards.id}`}
                state={{ cards }}
              >
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardSummaryTest;
