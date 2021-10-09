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
            <div className="result-info col-lg-3">
              <div>
                <p className="card-name">{cards.name}</p>
              </div>
              <div>
                <p className="result-section-title">Set</p>
                <p className="set-and-rarity">
                  {cards.set.name}
                  <img
                    className="set-symbol"
                    alt={cards.set.name}
                    src={cards.set.images.symbol}
                  />
                </p>
              </div>
              <div>
                <p className="result-section-title">Card No.</p>
                <p>
                  {cards.number}/{cards.set.printedTotal}
                </p>
              </div>
              <div>
                <p className="result-section-title">Rarity</p>
                <p>{cards.rarity}</p>
              </div>
              <Link
                className="btn btn-primary btn-lg details-button"
                to={`/details/${cards.id}`}
                // state={{ cards }}
              >
                Details
              </Link>
            </div>
            {/* CARD PRICES */}
            <div className="result-info col-lg-6">
              <p className="card-name">Prices:</p>
              <div className="row">
                {/* LOOPS OVER THE FIRST TCGPLAYER OBJECT FOR EACH VARIATION OF THE CARD */}
                {Object.entries(cards.tcgplayer.prices).map(([key, value]) => {
                  return (
                    <div className="result-info col-lg-5">
                      <p>{key.toUpperCase()}</p>
                      {/* LOOPS OVER THE PRICE OBJECT IN TCGPLAYER FOR EACH VARIATION OF THE CARD */}
                      {Object.entries(value).map(([key2, value2]) => {
                        return (
                          <>
                            <p className="result-section-title">{key2.toUpperCase()}</p>
                            <p>{value2}</p>
                          </>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardSummaryTest;
