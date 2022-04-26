import React from "react";
import "./HomeStepsHeader.scss";
import decoration from "../../assets/Decoration.svg";

export default function HomeStepsHeader() {
  return (
    <div className="steps-header">
      <h1>Wystarczą 4 proste kroki</h1>
      <img src={decoration} alt="decoration" height="33" />
    </div>
  );
}
