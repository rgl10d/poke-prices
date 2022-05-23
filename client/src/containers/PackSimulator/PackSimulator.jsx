import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import pokemon from "pokemontcgsdk";

// POKEMON CARD API KEY
pokemon.configure({ apiKey: "bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b" });

const PackSimulator = () => {
  const [commonCards, setCommonCards] = useState();
  const [uncommonCards, setUncommonCards] = useState();
  const [rareCards, setRareCards] = useState(null);
  const [pack, setPack] = useState();

  // FETCH SPECIFIC SET CARD LIST ON PAGE LOAD
  useEffect(() => {
    pokemon.card.where({ q: "set.id:base1 rarity:Common" }).then((results) => {
      setCommonCards(results.data);
    });

    pokemon.card
      .where({ q: "set.id:base1 rarity:Uncommon" })
      .then((results) => {
        setUncommonCards(results.data);
      });

    pokemon.card.where({ q: "set.id:base1 rarity:Rare" }).then((results) => {
      setRareCards(results.data);
    });
  }, []);

  // PACK LOGIC FUNCTION
  const openPack = () => {
    const packArray = [];
    for (let i = 0; i < 11; i++) {
      if (i < 7) {
        packArray.push(commonCards[[Math.floor(Math.random() * commonCards.length)]]);
      } else if (i >= 7 && i < 10) {
        packArray.push(uncommonCards[[Math.floor(Math.random() * uncommonCards.length)]]);
      } else {
        packArray.push(rareCards[[Math.floor(Math.random() * rareCards.length)]]);
      }
    }
    setPack(packArray);
  };

  if (pack) {
    return (
      <>
        <Navbar />
        <div className="container">
          {pack.map((cards) => {
            return <img src={cards.images.small} alt={cards.name} />;
          })}
        </div>
        <button className="btn btn-primary" onClick={openPack}>
          Open a pack!
        </button>
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
