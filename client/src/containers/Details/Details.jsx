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
  const [cardSet, setCardSet] = useState([]);
  const [attacks, setAttacks] = useState([]);
  const [totalNumber, setTotalNumber] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);
  const { id } = useParams();

  // AXIOS CALL FOR SPECIFIC CARD INFORMATION
  const getDetails = async () => {
    const query = "https://api.pokemontcg.io/v2/cards/" + id;
    await axios
      .get(query)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data.types) {
          setAttacks(response.data.data.attacks);
          setTypes(response.data.data.types);
          setPokedexNumber(response.data.data.nationalPokedexNumbers[0]);
        }
        setImage(response.data.data.images.small);
        setLargeImage(response.data.data.images.large);
        setCardDetail(response.data.data);
        setTotalNumber(response.data.data.set.printedTotal);
        setReleaseDate(response.data.data.set.releaseDate);
        setCardSet(response.data.data.set.name);
      })
      .catch((err) => {
        console.log(err);
      });
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

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>{cardDetail.name}</h1>
        <img src={image} alt={cardDetail.name} onClick={handleShowLarge} />
        <p>Click to enlarge or shrink image</p>
        {seeLarge && (
          <dialog className="large-card" open onClick={handleShowLarge}>
            <img
              className="large-card-image"
              src={largeImage}
              onClick={handleShowLarge}
              alt={cardDetail.name}
            />
          </dialog>
        )}
        <p>Set: {cardSet}</p>
        <p>
          Number in set: {cardDetail.number}/{totalNumber}
        </p>
        <p>Released: {releaseDate}</p>
        <p>Rarity: {cardDetail.rarity}</p>
        <p>HP: {cardDetail.hp}</p>
        <p>Artist: {cardDetail.artist}</p>
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
      </div>
    </>
  );
};

export default Details;
