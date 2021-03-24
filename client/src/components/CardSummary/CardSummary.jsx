import React from "react";
import "./CardSummary.css";
import { Link } from "react-router-dom";

const CardSummary = (props) => {
  return (
    <>
      <div className="row">
        {props.cards.map((cards) => {
          // BASIC CARD INFO
          const summary = (
            <>
              <p className="card-name">{cards.name}</p>
              <img
                className="card-images"
                alt={cards.name}
                src={cards.images.small}
                key={cards.id}
              />
              <p className="set-and-rarity">
                {cards.set.name}
                <img
                  className="set-symbol"
                  alt={cards.set.name}
                  src={cards.set.images.symbol}
                />
                {cards.rarity}
              </p>
            </>
          );
          // DETAILS LINK FOR EACH CARD
          const detailsBtn = (
            <Link
            className="btn btn-primary btn-lg details-button"
            to={`/details/${cards.id}`}
            state={{ cards }}
          >
            Details
          </Link>
          );
          // DISPLAY FOR MISSING PRICE INFO
          if (!cards.tcgplayer) {
            return (
              <div className="col-sm-3">
                <div className="summary-position">
                  {summary}
                  <hr className="my-1 separater" />
                  <p>Price Information Unavailable</p>
                  <p>Low: --</p>
                  <p>High: --</p>
                  <p>Market: --</p>
                  {detailsBtn}
                </div>
              </div>
            );
          // DISPLAY PRICES FOR NORMAL/HOLO/REVERSEHOLO CARDS
          } else if (
            cards.tcgplayer.prices.normal &&
            cards.tcgplayer.prices.holofoil &&
            cards.tcgplayer.prices.reverseHolofoil
          ) {
            return (
              <div className="col-sm-3">
                <div className="summary-position">
                  {summary}
                  <hr className="my-1 separater" />
                  <p>TCGPlayer:</p>
                  <p>Normal:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.normal.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.normal.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.normal.market}
                    </span>
                  </p>
                  <p>Holofoil:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.holofoil.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.holofoil.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.holofoil.market}
                    </span>
                  </p>
                  <p>Reverse Holofoil:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.reverseHolofoil.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.reverseHolofoil.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.reverseHolofoil.market}
                    </span>
                  </p>
                  {detailsBtn}
                </div>
              </div>
            );
          // DISPLAY PRICES FOR NORMAL/HOLO CARDS
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
          // DISPLAY PRICES FOR HOLO/REVERSEHOLO CARDS
          } else if (
            cards.tcgplayer.prices.holofoil &&
            cards.tcgplayer.prices.reverseHolofoil
          ) {
            return (
              <div className="col-sm-3">
                <div className="summary-position">
                  {summary}
                  <hr className="my-1 separater" />
                  <p>TCGPlayer:</p>
                  <p>Holofoil:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.holofoil.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.holofoil.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.holofoil.market}
                    </span>
                  </p>
                  {/* <hr className="my-1 separater" /> */}
                  <p>Reverse Holofoil:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.reverseHolofoil.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.reverseHolofoil.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.reverseHolofoil.market}
                    </span>
                  </p>
                  {detailsBtn}
                </div>
              </div>
            );
          // DISPLAY PRICES FOR NORMAL/REVERSEHOLO CARDS
          } else if (
            cards.tcgplayer.prices.normal &&
            cards.tcgplayer.prices.reverseHolofoil
          ) {
            return (
              <div className="col-sm-3">
                <div className="summary-position">
                  {summary}
                  <hr className="my-1 separater" />
                  <p>TCGPlayer:</p>
                  <p>Normal:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.normal.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.normal.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.normal.market}
                    </span>
                  </p>
                  <p>Reverse Holofoil:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.reverseHolofoil.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.reverseHolofoil.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.reverseHolofoil.market}
                    </span>
                  </p>
                  {detailsBtn}
                </div>
              </div>
            );
          // DISPLAY PRICES FOR HOLO ONLY CARDS
          } else if (cards.tcgplayer.prices.holofoil) {
            return (
              <div className="col-sm-3">
                <div className="summary-position">
                  {summary}
                  <hr className="my-1 separater" />
                  <p>TCGPlayer:</p>
                  <p>Holofoil:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.holofoil.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.holofoil.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.holofoil.market}
                    </span>
                  </p>
                  {detailsBtn}
                </div>
              </div>
            );
          // DISPLAY PRICES FOR NORMAL ONLY CARDS
          } else if (cards.tcgplayer.prices.normal) {
            return (
              <div className="col-sm-3">
                <div className="summary-position">
                  {summary}
                  <hr className="my-1 separater" />
                  <p>TCGPlayer:</p>
                  <p>Normal:</p>
                  <p>
                    Low: ${cards.tcgplayer.prices.normal.low}
                    <span className="summary-prices">
                      High: ${cards.tcgplayer.prices.normal.high}
                    </span>
                    <span className="summary-prices">
                      Market: ${cards.tcgplayer.prices.normal.market}
                    </span>
                  </p>
                  {detailsBtn}
                </div>
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
              3
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
