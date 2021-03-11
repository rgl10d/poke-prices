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
                <p>Low: --</p>
                <p>High: --</p>
                <p>Market: --</p>
              </div>
            );
          } else if (
            cards.tcgplayer.prices.holofoil &&
            cards.tcgplayer.prices.normal
          ) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Low: ${cards.tcgplayer.prices.normal.low}</p>
                <p>High: ${cards.tcgplayer.prices.normal.high}</p>
                <p>Market: ${cards.tcgplayer.prices.normal.market}</p>
              </div>
            );
          } else if (
            cards.tcgplayer.prices.holofoil &&
            cards.tcgplayer.prices.reverseHolofoil
          ) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Holographic:</p>
                <p>Low: ${cards.tcgplayer.prices.holofoil.low}</p>
                <p>High: ${cards.tcgplayer.prices.holofoil.high}</p>
                <p>Market: ${cards.tcgplayer.prices.holofoil.market}</p>
                <p>Reverse Holographic:</p>
                <p>Low: ${cards.tcgplayer.prices.reverseHolofoil.low}</p>
                <p>High: ${cards.tcgplayer.prices.reverseHolofoil.high}</p>
                <p>Market: ${cards.tcgplayer.prices.reverseHolofoil.market}</p>
              </div>
            );
          } else if (
            cards.tcgplayer.prices.normal &&
            cards.tcgplayer.prices.reverseHolofoil
          ) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Normal:</p>
                <p>Low: ${cards.tcgplayer.prices.normal.low}</p>
                <p>High: ${cards.tcgplayer.prices.normal.high}</p>
                <p>Market: ${cards.tcgplayer.prices.normal.market}</p>
                <p>Reverse Holographic:</p>
                <p>Low: ${cards.tcgplayer.prices.reverseHolofoil.low}</p>
                <p>High: ${cards.tcgplayer.prices.reverseHolofoil.high}</p>
                <p>Market: ${cards.tcgplayer.prices.reverseHolofoil.market}</p>
              </div>
            );
          } else if (cards.tcgplayer.prices.reverseHolofoil) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Low: --</p>
                <p>High: --</p>
                <p>Market: ${cards.tcgplayer.prices.reverseHolofoil.market}</p>
              </div>
            );
          } else if (cards.tcgplayer.prices.holofoil) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Low: ${cards.tcgplayer.prices.holofoil.low}</p>
                <p>High: ${cards.tcgplayer.prices.holofoil.high}</p>
                <p>Market: ${cards.tcgplayer.prices.holofoil.market}</p>
              </div>
            );
          } else if (cards.tcgplayer.prices.normal) {
            return (
              <div className="col-sm-3">
                {summary}
                <p>Low: ${cards.tcgplayer.prices.normal.low}</p>
                <p>High: ${cards.tcgplayer.prices.normal.high}</p>
                <p>Market: ${cards.tcgplayer.prices.normal.market}</p>
              </div>
            );
          } else {
            return <div className="col-sm-3">{summary}</div>;
          }
        })}
      </div>
      {/* <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default CardSummary;
