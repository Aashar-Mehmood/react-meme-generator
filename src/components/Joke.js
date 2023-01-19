import { useState } from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);
  function toggleShow() {
    setIsShown((prevState) => !prevState);
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShow}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </div>
  );
}
