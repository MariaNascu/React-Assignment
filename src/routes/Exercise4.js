import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";

function Exercise4() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <p>
          Use the useState React hook to track how many times a button is
          clicked, and display the number.
        </p>
        <div className="solution-container">
          <p>You've clicked the button {count} times</p>
          <button
            style={{
              marginTop: " 5px",
              backgroundColor: "pink",
              width: "70px",
              height: "50px",
              borderRadius: "12px",
            }}
            id="ex4Button"
            onClick={() => setCount(count + 1)}
          >
            Click here!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Exercise4;
