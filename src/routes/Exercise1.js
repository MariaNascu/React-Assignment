function Exercise1() {
  return (
    <div>
      <div>
        <p>
          Create a square with a background color. The width and height for the
          square should be 200px. Inside the square, render "Hello, World!". The
          text should be vertically and horizontally aligned.
        </p>
      </div>
      <div className="solution-container">
        <div
          class="square"
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "blueviolet",
            border: "5px solid grey",
          }}
        >
          <div
            class="flex-container"
            style={{
              textAlign: "center",
              marginTop: "75px",
              color: "whitesmoke",
            }}
          >
            <p className="text-style">Hello World! </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exercise1;
