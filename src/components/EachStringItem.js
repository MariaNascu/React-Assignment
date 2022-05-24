import React from "react";

export default function EachStringItem(props) {
  const { stringArray } = props;

  const renderList = stringArray.map((item) => <div>{item}</div>);
  return (
    <div>
      <i>
        <ul>{renderList}</ul>
      </i>
    </div>
  );
}
