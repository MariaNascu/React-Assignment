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
          className="button-style-ex2"
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
