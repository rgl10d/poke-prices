import React from "react";
import "./CardSummary.css";

const CardSummary = (props) => {
  return (
    <>
      <div className="row">
        {props.cards.map((cards) => {
          const summary = (
            <>
              <img
                className="card-results"
                alt={cards.name}
                src={cards.images.small}
                key={cards.id}
              />
              <p>{cards.name}</p>
              <p>
                {cards.set.name}
                <img
                  className="set-symbol"
                  alt={cards.set.name}
                  src={cards.set.images.symbol}
                />
              </p>
              <p>{cards.rarity}</p>
            </>
          );
          if (!cards.tcgplayer) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Market: --</p>
              </div>
            );
          } else if (cards.tcgplayer.prices.holofoil && cards.tcgplayer.prices.normal) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Market: ${cards.tcgplayer.prices.normal.market}</p>
              </div>
            );
          } else if (cards.tcgplayer.prices.holofoil) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Market: ${cards.tcgplayer.prices.holofoil.market}</p>
              </div>
            );
          } else if (cards.tcgplayer.prices.reverseHolofoil) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Market: ${cards.tcgplayer.prices.reverseHolofoil.market}</p>
              </div>
            );
          } else if (cards.tcgplayer.prices.normal) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Market: ${cards.tcgplayer.prices.normal.market}</p>
              </div>
            );
          } else {
            return <div className="col-sm-3">{summary}</div>;
          }
        })}
      </div>
    </>
  );
};

export default CardSummary;
