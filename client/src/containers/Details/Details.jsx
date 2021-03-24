import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import "./Details.css";

const Details = () => {
  const [cardDetail, setCardDetail] = useState([]);
  const [image, setImage] = useState([]);
  const [largeImage, setLargeImage] = useState([]);
  const [seeLarge, setSeeLarge] = useState(false);
  const [pokedexNumber, setPokedexNumber] = useState([]);
  const [types, setTypes] = useState([]);
  const [attacks, setAttacks] = useState([]);
  const [totalNumber, setTotalNumber] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);
  const { id } = useParams();

  // Axios call for specific card information
  const getDetails = async () => {
    const query = "https://api.pokemontcg.io/v2/cards/" + id;
    await axios
      .get(query)
      .then((response) => {
        console.log(response.data.data);
        setAttacks(response.data.data.attacks);
        setImage(response.data.data.images.small);
        setLargeImage(response.data.data.images.large);
        setTypes(response.data.data.types);
        setPokedexNumber(response.data.data.nationalPokedexNumbers[0]);
        setCardDetail(response.data.data);
        setTotalNumber(response.data.data.set.printedTotal);
        setReleaseDate(response.data.data.set.releaseDate);
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

  const handleShowLarge = () => {
    setSeeLarge(!seeLarge);
  };

  return (
    <>
      <Navbar />
      <h1>{cardDetail.name}</h1>
      <img src={image} alt={cardDetail.name} onClick={handleShowLarge} />
      <p>Click to enlarge or shrink image</p>
      {seeLarge && (
        <dialog
          className="large-card"
          open
          onClick={handleShowLarge}
        >
          <img
            className="large-card-image"
            src={largeImage}
            onClick={handleShowLarge}
            alt={cardDetail.name}
          />
        </dialog>
      )}
      <p>Artist: {cardDetail.artist}</p>
      <p>
        Number in set: {cardDetail.number}/{totalNumber}
      </p>
      <p>Released: {releaseDate}</p>
      <p>Rarity: {cardDetail.rarity}</p>
      <p>HP: {cardDetail.hp}</p>
      <p>{cardDetail.flavorText}</p>
      <p>Pokdex Number: {pokedexNumber}</p>
      {types.map((types) => {
        return <p>Type(s): {types}</p>;
      })}
      {attacks.map((attacks) => {
        return (
          <p>
            <span>{attacks.name}</span> - {attacks.text}{" "}
            <span> {attacks.damage} </span>
          </p>
        );
      })}
    </>
  );
};

export default Details;
