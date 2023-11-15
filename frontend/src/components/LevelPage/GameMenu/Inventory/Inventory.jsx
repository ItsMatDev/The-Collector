import { useState } from "react";
import PropTypes from "prop-types";
import "./Inventory.scss";
import Bag from "../../../../assets/pictures/ComponentsPics/Bag.png";
import egg from "../../../../assets/pictures/jurassic/quetzalcoatlusEgg.png";
import tooth from "../../../../assets/pictures/jurassic/tRexTooth.png";
import claw from "../../../../assets/pictures/jurassic/velociraptorclaw.png";

function Inventory({ bag }) {
  const [showInventory, setShowInventory] = useState(false);
  const [info, setInfo] = useState("");

  const handleInventoryToggle = () => {
    setShowInventory(!showInventory);
  };

  const handleEnter = (itemName) => {
    setInfo(<article className="PopUpInBag">{`${itemName}`}</article>);
  };

  const handleLeave = () => {
    setInfo("");
  };

  return (
    <>
      <button
        className="invButton"
        type="button"
        onClick={handleInventoryToggle}
      >
        <img className="bag" src={Bag} alt="Le sac" />
      </button>
      <article
        className={`inventoryPopUp ${
          showInventory ? "inventoryPopUp__show" : ""
        }`}
      >
        <button
          type="button"
          aria-label="Fermer la pop-up"
          className="inventoryPopUp__closeButton"
          onClick={handleInventoryToggle}
        >
          X
        </button>
        <main className="itemsContainer">
          {bag.find((e) => e === "egg") ? (
            <button
              key="eggButton"
              type="button"
              className="eggButton"
              onFocus={() => handleEnter("Oeuf de quetzalcoatlus")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Oeuf de quetzalcoatlus")}
              onMouseLeave={handleLeave}
            >
              <img src={egg} className="eggImgInBag" alt="L'oeuf" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "tooth") ? (
            <button
              key="toothButton"
              type="button"
              className="toothButton"
              onFocus={() => handleEnter("Dent du T-Rex")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("Dent du T-Rex")}
              onMouseLeave={handleLeave}
            >
              <img src={tooth} className="toothImgInBag" alt="La dent" />
            </button>
          ) : (
            ""
          )}
          {bag.find((e) => e === "claw") ? (
            <button
              key="clawButton"
              type="button"
              className="clawButton"
              onFocus={() => handleEnter("La griffe du velociraptor")}
              onBlur={handleLeave}
              onMouseEnter={() => handleEnter("La griffe du velociraptor")}
              onMouseLeave={handleLeave}
            >
              <img src={claw} className="clawImgInBag" alt="La griffe" />
            </button>
          ) : (
            ""
          )}
          {info}
        </main>
      </article>
    </>
  );
}

Inventory.propTypes = {
  bag: PropTypes.arrayOf(PropTypes.string),
};

Inventory.defaultProps = {
  bag: [],
};

export default Inventory;
