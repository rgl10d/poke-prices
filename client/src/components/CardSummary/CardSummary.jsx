import React from "react";
import "./CardSummary.css";

const CardSummary = (props) => {
  return (
    <>
      <div className="row">
        {props.cards.map((cards) => {
          return (
            <div className="col-sm-4">
              <img
                className="card-results"
                alt={cards.name}
                src={cards.images.small}
                key={cards.id}
              />
              <p>{cards.name}</p>
              {/* <p>{cards.types[0]}</p> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardSummary;
