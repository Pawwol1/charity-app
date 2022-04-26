import React from "react";
import "./EntityList.scss";
import EntityListItem from "./EntityListItem";

export default function EntityList({ entities }) {
  return (
    <div className="entity-list">
      {entities.map((entity) => {
        return <EntityListItem key={entity.id} entity={entity} />;
      })}
    </div>
  );
}
