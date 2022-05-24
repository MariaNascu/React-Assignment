import { click } from "@testing-library/user-event/dist/click";

function Exercise2() {
  function stringAlert() {
    alert("You clicked me. Thanks!");
  }

  return (
    <div>
      <div>
        <p>
          Add a native HTML button called "Click me". Capture the click event
          and alert the message, "You cliked me. Thanks!".
        </p>
      </div>
      <div className="solution-container">
        <button
          style={{
            marginTop: " 5px",
            backgroundColor: "aqua",
            width: "70px",
            height: "50px",
            borderRadius: "12px",
          }}
          id="buttonId"
          onClick={stringAlert}
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default Exercise2;
