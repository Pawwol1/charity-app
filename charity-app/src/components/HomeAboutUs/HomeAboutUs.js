import React from "react";
import "./HomeAboutUs.scss";
import decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";

export default function HomeAboutUs() {
  return (
    <section className="about-us" name="aboutus">
      <div className="text">
        <h1>O nas</h1>
        <img src={decoration} alt="decoration" height="33" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img
          className="signature"
          src={Signature}
          alt="signature"
          height="150"
        />
      </div>
      <div className="image"></div>
    </section>
  );
}
