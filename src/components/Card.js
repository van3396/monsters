import React from "react";
import "../css-components/card.css";

export const Card = (props) => {
  return (
    <div className="card_container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
      />
      <h1>{props.monster.name}</h1>
      <h3>{props.monster.email}</h3>
    </div>
  );
};
