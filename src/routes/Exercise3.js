import React from "react";
import Button from "../components/Button";

function Exercise3() {
  return (
    <div>
      <div>
        <p>
          Create a custom Button component and render it four times. On click,
          it should alert which button was clicked, by displaying the name of
          the button.
        </p>
      </div>
      <div className="solution-container">
        <Button buttonName={"Button 1"} />
        <br></br>
        <Button buttonName={"Button 2"} />
        <br></br>
        <Button buttonName={"Button 3"} />
        <br></br>
        <Button buttonName={"Button 4"} />
      </div>
    </div>
  );
}

export default Exercise3;
