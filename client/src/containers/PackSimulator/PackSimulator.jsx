import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import pokemon from "pokemontcgsdk";

// POKEMON CARD API KEY
pokemon.configure({ apiKey: "bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b" });

const PackSimulator = () => {
  const [cardList, setCardList] = useState(null);
  const [pack, setPack] = useState();

  // FETCH SPECIFIC SET CARD LIST ON PAGE LOAD
  useEffect(() => {
    pokemon.card.where({ q: "set.id:base1 rarity:Common" }).then((results) => {
      setCardList(results.data);
    });
  }, [cardList]);

  // PACK LOGIC FUNCTION
  const openPack = () => {
    const commonArray = [];
    for (let i = 0; i < 7; i++) {
      commonArray.push(cardList[[Math.floor(Math.random() * cardList.length)]]);
    }
    setPack(commonArray);
    // console.log(cardList);
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

  if (cardList === null) {
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

  if (cardList) {
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
