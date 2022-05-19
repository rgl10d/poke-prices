import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import "./Details.css";
import pokemon from "pokemontcgsdk";

// POKEMON CARD API KEY
pokemon.configure({apiKey: 'bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b'})

const Details = () => {
  const [cardDetail, setCardDetail] = useState([]);
  const [error, setError] = useState(false);

  const [seeLarge, setSeeLarge] = useState(false);
  const { id } = useParams();

  // AXIOS CALL FOR SPECIFIC CARD INFORMATION
  const getDetails = () => {
    pokemon.card.find(id)
      .then(card => {
        try {
        setCardDetail(card);
        } catch(err) {
          setError(err)
        }
      })
  };

  // AXIOS CALL WHEN PAGE LOADS
  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // LARGE CARD TOGGLE
  const handleShowLarge = () => {
    setSeeLarge(!seeLarge);
  };

  if(cardDetail.images) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>{cardDetail.name}</h1>
          <img src={cardDetail.images.small} alt={cardDetail.name} onClick={handleShowLarge} />
          <p>Click to enlarge or shrink image</p>
          {seeLarge && (
            <dialog className="large-card" open onClick={handleShowLarge}>
              <img
                className="large-card-image"
                src={cardDetail.images.large}
                onClick={handleShowLarge}
                alt={cardDetail.name}
              />
            </dialog>
          )}
          <p>Set: {cardDetail.set.name}</p>
          <p>
            Number in set: {cardDetail.number}/{cardDetail.set.printedTotal}
          </p>
        </div>
      </>
    );
  }
  
  if(!cardDetail.images) {
    return (
      null
    )
  }

  if(error) {
    return (
      <h1>Oops! Something went wrong!</h1>
    )
  }
};

export default Details;
