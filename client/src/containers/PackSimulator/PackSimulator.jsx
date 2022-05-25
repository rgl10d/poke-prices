import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./PackSimulator.css";
import cardBack from "../../assets/images/pokemonCardBackEdit.png";
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
    // CONDITIONAL TO WAIT IF A PACK HAS BEEN OPENED ALREADY
    if (pack) {
      // MOVE TO TOP OF PAGE WHEN OPENING NEW PACK
      window.scrollTo(0, 0);
      setFlipArray([]);
      // CREATED A SET TIMEOUT FOR .8 SECONDS FOR TIME FOR THE CARDS TO FLIP OVER BEFORE CHANGING WHAT THEY ARE
      setTimeout(() => {
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
      }, 800);
      // CONDITIONAL TO SKIP THE .8 SECOND TIMEOUT IF A PACK WASN'T OPENED YET
    } else {
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
    }
  };

  // CARD FLIP ANIMATION FUNCTION
  const revealCard = (event) => {
    if (!flipArray.includes(event.target.id)) {
      clickedCardArray.push(event.target.id);
      setFlipArray(clickedCardArray);
    }
    setClickState(!clickState);
  };

  // IF A PACK HAS BEEN "OPENED"
  if (pack) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            {pack.map((cards, i) => {
              return (
                <>
                  <div
                    className={
                      flipArray.includes("pack-card-" + i)
                        ? "flip-container flip col-sm-3 card-pack-result"
                        : "flip-container col-sm-3 card-pack-result"
                    }
                    onClick={revealCard}
                  >
                    <div className="flipper">
                      <img
                        src={cardBack}
                        alt="Pokemon Card Back"
                        id={"pack-card-" + i}
                        className="front card-pack-result"
                      />
                      <img
                        src={cards.images.small}
                        alt={cards.name}
                        className="back card-pack-result"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row">
            <div className="col text-center">
              <button
                className="btn btn-primary open-pack-button"
                onClick={openPack}
              >
                Open another!
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // IF API CALL HASN'T FINISHED LOADING
  if (rareCards === null) {
    return (
      <>
        <Navbar />
        <div>
          <h1 className="text-center">Pokemon card pack simulator</h1>

          <div className="row">
            <div className="col text-center">
              <button
                className="btn btn-danger open-pack-button"
                onClick={openPack}
              >
                Loading...
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // IF API CALL HAS FINISHED LOADING
  if (rareCards) {
    return (
      <>
        <Navbar />
        <div>
          <h1 className="text-center">Pokemon card pack simulator</h1>

          <div className="row">
            <div className="col text-center">
              <button
                className="btn btn-primary open-pack-button"
                onClick={openPack}
              >
                Open a pack!
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default PackSimulator;
