import React, { useState } from "react";
import "./EntitySelector.scss";

export default function EntitySelector({ callback }) {
  const [selected, setSelected] = useState(1);
  const handleSelect = (id) => {
    setSelected(id);
    callback(id);
  };
  return (
    <div className="entity-selector">
      <button
        className={selected === 1 ? "selected" : ""}
        onClick={() => handleSelect(1)}
      >
        Fundacjom
      </button>
      <button
        className={selected === 2 ? "selected" : ""}
        onClick={() => handleSelect(2)}
      >
        Organizacjom pozarządowym
      </button>
      <button
        className={selected === 3 ? "selected" : ""}
        onClick={() => handleSelect(3)}
      >
        Lokalnym zbiórkom
      </button>
    </div>
  );
}
