import React from "react";
import { Link } from "react-router-dom";
import "./HomeStepsButton.scss";

export default function HomeStepsButton() {
  return (
    <div className="steps-action">
      <Link className="action-button" to="/login">
        ODDAJ RZECZY
      </Link>
    </div>
  );
}
