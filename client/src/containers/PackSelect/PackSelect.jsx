import React, { useEffect, useState } from "react";
import "./PackSelect.css";
import Navbar from "../../components/Navbar/Navbar";
import pokemon from "pokemontcgsdk";
import { Link } from "react-router-dom";

const PackSelect = () => {
  const [packSets, setPackSets] = useState();

  useEffect(() => {
    pokemon.set.all().then((sets) => {
      const filteredSets = sets.filter((cardSet) => {
        return (
          cardSet.series !== "Other" &&
          cardSet.series !== "POP" &&
          cardSet.series !== "Promo" &&
          !cardSet.name.includes("Promos") &&
          !cardSet.name.includes("Trainer Kit") &&
          !cardSet.name.includes("Shiny Vault") &&
          cardSet.total > 50
        );
      });
      setPackSets(filteredSets);
      console.log(filteredSets);
    });
  }, []);

  if (packSets) {
    return (
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            {packSets.map((sets) => {
              return (
                <div className="col-sm-3">
                  <Link to={`/packsim/${sets.id}`}>
                    <img
                      className="set-logos"
                      src={sets.images.logo}
                      alt={sets.name}
                    />
                  </Link>
                  <p className="set-titles">{sets.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  if (!packSets) {
    return <Navbar />;
  }
};

export default PackSelect;
