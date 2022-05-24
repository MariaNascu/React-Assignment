import { useEffect, useState } from "react";

function Exercise7() {
  const [inputs, setInputs] = useState({});
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const submitName = (event) => {
    setFirstName(event.target.value);
  };

  const submitLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  const greetMe = () => {
    alert(`Hello, ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <div>
        <p>
          Build a form that accepts a first name and a last name. Add a button
          called "Greet Me" that when clicked, will alert "Hello, [first name]
          [last name]!". First name and last name should have the values from
          the corresponding inputs.
        </p>
        <div className="solution-container">
          <form onSubmit={handleSubmit}>
            <label>
              Enter your first name :
              <input
                type="text"
                name="firstName"
                value={firstName}
                onBlur={submitName}
              />
            </label>
            <label>
              Enter your last name :
              <input
                type="text"
                name="lastName"
                value={lastName}
                onBlur={submitLastName}
              />
            </label>
          </form>
          <button onClick={greetMe}> Greet me!</button>
        </div>
      </div>
    </div>
  );
}

export default Exercise7;
