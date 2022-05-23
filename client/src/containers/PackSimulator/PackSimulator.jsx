import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import pokemon from "pokemontcgsdk";

// POKEMON CARD API KEY
pokemon.configure({ apiKey: "bda1ab63-5db0-43e0-8b1f-a50ba6b7fc4b" });

const PackSimulator = () => {
  const [cardList, setCardList] = useState();
  const [pack, setPack] = useState();

  const openPack = () => {
    // setPack(cardList[[Math.floor(Math.random() * cardList.length)]])
    console.log(cardList);
  };

  // FETCH SPECIFIC SET CARD LIST ON PAGE LOAD
  useEffect(() => {
    pokemon.card.where({ q: "set.id:base1 rarity:Rare" }).then((results) => {
      setCardList(results.data);
    });
  }, []);




//   if(cardDetail.images) {
//     return (
//       <>
//         <Navbar />
//         <div className="container">
//           <h1>{cardDetail.name}</h1>
//           <img src={cardDetail.images.small} alt={cardDetail.name} onClick={handleShowLarge} />
//           <p>Click to enlarge or shrink image</p>
//           {seeLarge && (
//             <dialog className="large-card" open onClick={handleShowLarge}>
//               <img
//                 className="large-card-image"
//                 src={cardDetail.images.large}
//                 onClick={handleShowLarge}
//                 alt={cardDetail.name}
//               />
//             </dialog>
//           )}
//           <p>Set: {cardDetail.set.name}</p>
//           <p>
//             Number in set: {cardDetail.number}/{cardDetail.set.printedTotal}
//           </p>
//         </div>
//       </>
//     );
//   }
  
//   if(!cardDetail.images) {
//     return (
//       null
//     )
//   }

//   if(error) {
//     return (
//       <h1>Oops! Something went wrong!</h1>
//     )
//   }


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
};

export default PackSimulator;
