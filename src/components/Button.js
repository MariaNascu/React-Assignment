import React, { useState } from "react";

export default function Button(props) {
  const [buttonName, setButtonName] = useState("");

  const getName = () => {
    const setButtonName = props.buttonName;
    alert(`You clicked ${props.buttonName}`);
  };

  return (
    <div>
      <button className="button-component-ex3" id="ex3Button" onClick={getName}>
        Button
      </button>
    </div>
  );
}
