import React from "react";
import "./EntityListItem.scss";

export default function EntityListItem({ entity }) {
  return (
    <div className="entity-list-item">
      <div className="left">
        <h1>{entity.name}</h1>
        <h2>{entity.subtitle}</h2>
      </div>
      <div className="right">
        <p>{entity.list.join(", ")}</p>
      </div>
    </div>
  );
}
