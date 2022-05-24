import React, { useState } from "react";

export default function Button(props) {
  const [buttonName, setButtonName] = useState("");

  const getName = () => {
    const namef = props.buttonName;
    console.log(namef);
    alert(`You clicked ${namef}`);
  };

  return (
    <div>
      <button
        style={{
          marginTop: " 5px",
          backgroundColor: "rebeccapurple",
          width: "70px",
          height: "50px",
          borderRadius: "12px",
          color: "whitesmoke",
        }}
        id="ex3Button"
        onClick={getName}
      >
        Button {getName}
      </button>
    </div>
  );
}
