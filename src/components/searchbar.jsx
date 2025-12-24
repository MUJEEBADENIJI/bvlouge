import { useState } from "react";
import "./searchbar.css";

function Searchbar({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <input type="text" placeholder="search products..." autoFocus />
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
}

export default Searchbar;
