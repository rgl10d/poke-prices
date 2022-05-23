import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import pokemon from "pokemontcgsdk";

// POKEMON CARD API KEY
pokemon.configure({ apiKey: "bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b" });

const PackSimulator = () => {
  const [cardList, setCardList] = useState();
  const [pack, setPack] = useState();

  const openPack = () => {
    setPack(cardList[[Math.floor(Math.random() * cardList.length)]]);
    // console.log(cardList);
  };

  // FETCH SPECIFIC SET CARD LIST ON PAGE LOAD
  useEffect(() => {
    pokemon.card.where({ q: "set.id:base1 rarity:Rare" }).then((results) => {
      setCardList(results.data);
    });
  }, []);

  if (pack) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>{pack.name}</h1>
          <img src={pack.images.small} alt={pack.name} />
        </div>
        <button className="btn btn-primary" onClick={openPack}>
          Open a pack!
        </button>
      </>
    );
  }

  if (!pack) {
    return (
      <>
        <Navbar />
        <div>
          <h1>Pokemon card pack simulator.</h1>

          <button className="btn btn-primary" onClick={openPack}>
            Open a pack!
          </button>
        </div>
      </>
    );
  }
};

export default PackSimulator;
