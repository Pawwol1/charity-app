import React from "react";
import "./HomeWhoWeHelpHeader.scss";
import decoration from "../../assets/Decoration.svg";

export default function HomeWhoWeHelpHeader() {
  return (
    <>
      <h1>Komu pomagamy?</h1>
      <img src={decoration} alt="decoration" height="33" />
    </>
  );
}
