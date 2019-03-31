import React, { useState } from "react";
import "./cardLatest.css";
import * as sides from "../../data/sides";
import { nameMap } from "../../data/names";

const Card = props => {
  let [state, setState] = useState({ side: sides.alphabetSide });

  const handleClick = () => {
    if (isAlphabet) {
      var msg = new SpeechSynthesisUtterance(nameMap.get(props.text));
      window.speechSynthesis.speak(msg);
    }
    setState({
      side:
        state.side === sides.alphabetSide ? sides.imageSide : sides.alphabetSide
    });
  };

  const isAlphabet = state.side === sides.alphabetSide;

  return (
    <div className={isAlphabet ? "card" : "card-flipped"} onClick={handleClick}>
      {isAlphabet ? (
        props.text
      ) : (
        <img
          alt="issue"
          style={{ height: "100%", width: "100%" }}
          src={require(`../../data/images/${props.text}.jpg`)}
        />
      )}
    </div>
  );
};
export default Card;
