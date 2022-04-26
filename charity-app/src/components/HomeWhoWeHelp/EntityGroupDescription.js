import React from "react";
import "./EntityGroupDescription.scss";

export default function EntityGroupDescription({ description }) {
  return (
    <div className="entity-group-description">
      <p>{description}</p>
    </div>
  );
}
