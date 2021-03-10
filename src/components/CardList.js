import React from "react";
import "../css-components/cardList.css";
import {Card} from "./Card";

export const CardList = (props) => {
  return (
    <div className="card_list">
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster}/>;
      })}
    </div>
  );
};
