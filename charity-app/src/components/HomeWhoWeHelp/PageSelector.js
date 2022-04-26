import React from "react";
import "./PageSelector.scss";

export default function PageSelector({ entities, callback, currentPage }) {
  const pages = Math.ceil(entities.length / 3);
  return (
    <div className="page-selector">
      {[...Array(pages)].map((page, idx) => (
        <div
          key={idx + 1}
          className={`page-number ${currentPage === idx + 1 ? "selected" : ""}`}
          onClick={() => callback(idx + 1)}
        >
          {idx + 1}
        </div>
      ))}
    </div>
  );
}
