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
            className="button-style-ex4"
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
