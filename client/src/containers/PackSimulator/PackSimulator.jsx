import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./PackSimulator.css";
import cardBack from "../../assets/images/pokemonCardBackEdited.png";
import pokemon from "pokemontcgsdk";
import { useParams } from "react-router-dom";
// POKEMON CARD API KEY
pokemon.configure({ apiKey: "bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b" });

const PackSimulator = () => {
  const [commonCards, setCommonCards] = useState();
  const [uncommonCards, setUncommonCards] = useState();
  const [rareCards, setRareCards] = useState(null);
  const [pack, setPack] = useState();
  const [flipArray, setFlipArray] = useState([]);
  const clickedCardArray = flipArray;
  const [clickState, setClickState] = useState(false);
  const params = useParams();

  // FETCH SPECIFIC SET CARD LIST ON PAGE LOAD
  useEffect(() => {
    pokemon.card
      .where({ q: "set.id:" + params.setid + " rarity:Common" })
      .then((results) => {
        setCommonCards(results.data);
      });

    pokemon.card
      .where({ q: "set.id:" + params.setid + " rarity:Uncommon" })
      .then((results) => {
        setUncommonCards(results.data);
      });

    pokemon.card
      .where({ q: "set.id:" + params.setid + " rarity:Rare" })
      .then((results) => {
        setRareCards(results.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // PACK LOGIC FUNCTION
  const openPack = () => {
    // MOVE TO TOP OF PAGE WHEN OPENING NEW PACK
    window.scrollTo(0, 0);
    setFlipArray([]);
    const packArray = [];
    for (let i = 0; i < 11; i++) {
      if (i < 7) {
        packArray.push(
          commonCards[[Math.floor(Math.random() * commonCards.length)]]
        );
      } else if (i >= 7 && i < 10) {
        packArray.push(
          uncommonCards[[Math.floor(Math.random() * uncommonCards.length)]]
        );
      } else {
        packArray.push(
          rareCards[[Math.floor(Math.random() * rareCards.length)]]
        );
      }
    }
    setPack(packArray);
  };

  // CARD FLIP ANIMATION FUNCTION
  const revealCard = (event) => {
    if (!flipArray.includes(event.target.id)) {
      clickedCardArray.push(event.target.id);
      setFlipArray(clickedCardArray);
      console.log(flipArray);
    }
    setClickState(!clickState);
  };

  if (pack) {
    return (
      <>
        <Navbar />
        <div className="container">
          {pack.map((cards, i) => {
            return (
              <>
                <div
                  className={
                    flipArray.includes("pack-card-" + i)
                      ? "flip-container flip"
                      : "flip-container"
                  }
                  onClick={revealCard}
                >
                  <div className="flipper">
                    <img
                      src={cardBack}
                      alt="Pokemon Card Back"
                      id={"pack-card-" + i}
                      className="front card-back"
                    />
                    <img
                      src={cards.images.small}
                      alt={cards.name}
                      className="back card-front"
                    />
                    ;
                  </div>
                </div>
              </>
            );
          })}
          <div className="col-sm-12">
            <button className="btn btn-primary" onClick={openPack}>
              Open a pack!
            </button>
          </div>
        </div>
      </>
    );
  }

  if (rareCards === null) {
    return (
      <>
        <Navbar />
        <div>
          <h1>Pokemon card pack simulator.</h1>

          <button className="btn btn-primary" disabled onClick={openPack}>
            Open a pack!
          </button>
        </div>
      </>
    );
  }

  if (rareCards) {
    return (
      <>
        <Navbar />
        <div>
          <h1>Pokemon card pack simulator.</h1>

          <button className="btn btn-success" onClick={openPack}>
            Open a pack!
          </button>
        </div>
      </>
    );
  }
};

export default PackSimulator;
