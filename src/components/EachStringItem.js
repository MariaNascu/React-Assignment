import React from "react";

export default function EachStringItem(props) {
  const { stringArray } = props;

  return (
    <div>
      <ul className="user-list-ex6">
        {stringArray.map((elementArray) => (
          <li key={elementArray}>{elementArray}</li>
        ))}
      </ul>
    </div>
  );
}
