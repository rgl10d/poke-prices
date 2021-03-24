import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

const Details = () => {
  const [cardDetail, setCardDetail] = useState([]);
  const [pokedexNumber, setPokedexNumber] = useState([]);
  const [attacks, setAttacks] = useState([]);
  const { id } = useParams();

  // Axios call for specific card information
  const getDetails = async () => {
    const query = "https://api.pokemontcg.io/v2/cards/" + id;
    await axios
      .get(query)
      .then((response) => {
        console.log(response.data.data);
        setAttacks(response.data.data.attacks);
        setPokedexNumber(response.data.data.nationalPokedexNumbers[0]);
        setCardDetail(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Axios call when page loads
  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <h1>{cardDetail.name}</h1>
      <p>{cardDetail.artist}</p>
      <p>Number in set: {cardDetail.number}</p>
      <p>HP: {cardDetail.hp}</p>
      <p>{cardDetail.flavorText}</p>
      <p>Pokdex Number: {pokedexNumber}</p>
      {/* {console.log(cardDetail.nationalPokedexNumbers)} */}
      {attacks.map((attacks) => {
        return (
          <p>
            {attacks.name} - {attacks.text} <span> {attacks.damage} </span>
          </p>
        );
      })}
    </>
  );
};

export default Details;
