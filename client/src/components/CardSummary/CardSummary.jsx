import React from "react";
import "./CardSummary.css";
import { Link } from "react-router-dom";

const CardSummaryTest = (props) => {
  return (
    <>
      {props.cards.map((cards) => {
        console.log(cards);
        // DETAILS LINK FOR EACH CARD
        return (
          <div className="row result-rows">
            <div className="result-img-div col-lg-3">
              <img
                className="card-images"
                alt={cards.name}
                src={cards.images.small}
                key={cards.id}
              />
            </div>
            <div className="result-info col-lg-6">
              <p className="card-name">Card Name: {cards.name}</p>
              <p className="set-and-rarity">
                Set: {cards.set.name}
                <img
                  className="set-symbol"
                  alt={cards.set.name}
                  src={cards.set.images.symbol}
                />
              </p>
              <p>Set #: {cards.number}/{cards.set.printedTotal}</p>
              <p>Rarity: {cards.rarity}</p>
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
