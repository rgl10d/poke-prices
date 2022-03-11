import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import "./Search.css";
// import { set } from "mongoose";

const AdvancedSearch = () => {
  const [setSearch, setSetSearch] = useState();
  const [cardType, setCardType] = useState();
  const [cardSearch, setCardSearch] = useState();
  const [placeholder, setPlaceholder] = useState();

  return (
    <>
      <Navbar />
      <div className="fluid-container">
        <div className="row search-bar-row no-gutters">
          {/* SEARCH BAR */}
          <div id="card-search-container" className="col-lg-3 search-container">
            <h2>Card Search</h2>
            <div className="input-group mb-3">
              <select
                className="scrollable-menu"
                id="card-type-selection"
                onChange={(e) => {
                  setPlaceholder(
                    e.target[e.target.selectedIndex].getAttribute(
                      "data-placeholder"
                    )
                  );
                  setCardType(e.target.value);
                }}
              >
                <option defaultValue value="">All Cards</option>
                <option data-placeholder="Nidoking" value="pokemon">Pokemon Only</option>
                <option data-placeholder="Brock" value="trainer">Trainer Only</option>
                <option data-placeholder="Water" value="energy">Energy Only</option>
              </select>
              <input
                id="card-search"
                type="text"
                name="card search"
                placeholder={placeholder}
                onChange={(e) => setCardSearch(e.target.value)}
              />
              {/* <button className="btn btn-primary" onClick={getSets}>
            Search
          </button> */}
              <Link
                className="btn btn-danger"
                to={`/search/results/${cardType}/${cardSearch}&page=1`}
              >
                Search
              </Link>
            </div>
          </div>
          {/* SET SEARCH DROPDOWN */}
          <div className="container">
            <h2>Set Search</h2>
            <div className="input-group mb-3">
              <select
                className="custom-select scrollable-menu"
                id="set-dropdown"
                onChange={(e) => setSetSearch(e.target.value)}
              >
                <option defaultValue>Choose a set...</option>
                <option value="base1">Base Set</option>
                <option value="base2">Jungle</option>
                <option value="base3">Fossil</option>
                <option value="base4">Base Set 2</option>
                <option value="base5">Team Rocket</option>
                <option value="gym1">Gym Heroes</option>
                <option value="gym2">Gym Challenge</option>
                <option value="neo1">Neo Genesis</option>
                <option value="neo2">Neo Discovery</option>
                <option value="neo3">Neo Revelation</option>
                <option value="neo4">Neo Destiny</option>
                <option value="base6">Legendary Collection</option>
                <option value="ecard1">Expedition Base Set</option>
                <option value="ecard2">Aquapolis</option>
                <option value="ecard3">Skyridge</option>
                <option value="ex1">EX Ruby and Sapphire</option>
                <option value="ex2">EX Sandstorm</option>
                <option value="ex3">EX Dragon</option>
                <option value="ex4">EX Team Magma vs Team Aqua</option>
                <option value="ex5">EX Hidden Legends</option>
                <option value="ex6">EX FireRed & LeafGreen</option>
                <option value="ex7">EX Team Rocket Returns</option>
                <option value="ex8">EX Deoxys</option>
                <option value="ex9">EX Emerald</option>
                <option value="ex10">EX Unseen Forces</option>
                <option value="ex11">EX Delta Species</option>
                <option value="ex12">EX Legend Maker</option>
                <option value="ex13">EX Holon Phantoms</option>
                <option value="ex14">EX Crystal Guardians</option>
                <option value="ex15">EX Dragon Frontiers</option>
                <option value="ex16">EX Power Keepers</option>
                <option value="dp1">Diamond & Pearl</option>
                <option value="dp2">Mysterious Treasures</option>
                <option value="dp3">Secret Wonders</option>
                <option value="dp4">Great Encounters</option>
                <option value="dp5">Majestic Dawn</option>
                <option value="dp6">Legends Awakened</option>
                <option value="dp7">Stormfront</option>
                <option value="pl1">Platinum</option>
                <option value="pl2">Rising Rivals</option>
                <option value="pl3">Supreme Victors</option>
                <option value="pl4">Arceus</option>
                <option value="hgss1">HeartGold & SoulSilver</option>
                <option value="hgss2">Unleashed</option>
                <option value="hgss3">Undaunted</option>
                <option value="hgss4">Triumphant</option>
                <option value="col1">Call of Legends</option>
                <option value="bw1">Black & White</option>
                <option value="bw2">Emerging Powers</option>
                <option value="bw3">Noble Victories</option>
                <option value="bw4">Next Destinies</option>
                <option value="bw5">Dark Explorers</option>
                <option value="bw6">Dragons Exalted</option>
                <option value="bw7">Boundaries Crossed</option>
                <option value="bw8">Plasma Storm</option>
                <option value="bw9">Plasma Freeze</option>
                <option value="bw10">Plasma Blast</option>
                <option value="bw11">Legendary Treasures</option>
                <option value="xy1">XY</option>
                <option value="xy2">Flashfire</option>
                <option value="xy3">Furious Fists</option>
                <option value="xy4">Phantom Forces</option>
                <option value="xy5">Primal Clash</option>
                <option value="xy6">Roaring Skies</option>
                <option value="xy7">Ancient Origins</option>
                <option value="xy8">BREAKthrough</option>
                <option value="xy9">BREAKpoint</option>
                <option value="g1">Generations</option>
                <option value="xy10">Fates Collide</option>
                <option value="xy11">Steam Siege</option>
                <option value="xy12">Evolutions</option>
                <option value="sm1">Sun & Moon</option>
                <option value="sm2">Guardians Rising</option>
                <option value="sm3">Burning Shadows</option>
                <option value="sm35">Shining Legends</option>
                <option value="sm4">Crimson Invasion</option>
                <option value="sm5">Ultra Prism</option>
                <option value="sm6">Forbidden Light</option>
                <option value="sm7">Celestial Storm</option>
                <option value="sm75">Dragon Majesty</option>
                <option value="sm8">Lost Thunder</option>
                <option value="sm9">Team Up</option>
                <option value="sm10">Unbroken Bonds</option>
                <option value="sm11">Unified Minds</option>
                <option value="sm115">Hidden Fates</option>
                <option value="sm12">Cosmic Eclipse</option>
                <option value="swsh1">Sword & Shield</option>
                <option value="swsh2">Rebel Clash</option>
                <option value="swsh3">Darkness Ablaze</option>
                <option value="swsh4">Vivid Voltage</option>
                <option value="swsh45">Shining Fates</option>
                <option value="swsh5">Battle Styles</option>
                <option value="swsh6">Chilling Reign</option>
                <option value="swsh7">Evolving Skies</option>
                <option value="cel25c">Celebrations: Classic Collection</option>
                <option value="swsh8">Fusion Strike</option>
                <option value="swsh9">Brilliant Stars</option>
              </select>
              {/* <button className="btn btn-primary" onClick={getSets}>
            Search
          </button> */}
              <Link
                className="btn btn-danger"
                to={`/results/set/${setSearch}&page=1`}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedSearch;
