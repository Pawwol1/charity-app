import React from "react";
import { Link } from "react-router-dom";
import decoration from "../../assets/Decoration.svg";
import "./HomeCTA.scss";

export default function HomeCTA() {
  return (
    <section className="cta" name="cta">
      <div className="image-container">
        <div className="image"></div>
      </div>
      <div className="action">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        <img src={decoration} alt="decoration" height="33" />
        <div className="buttons">
          <Link to="/">ODDAJ RZECZY</Link>
          <Link to="/">ZORGANIZUJ ZBIÓRKĘ</Link>
        </div>
      </div>
    </section>
  );
}
