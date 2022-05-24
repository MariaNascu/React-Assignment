import React from "react";

export default function EachObject(props) {
  const { stringUser } = props;

  const renderList = stringUser.map((item) => (
    <li key={item.id} style={{ backgroundColor: item.favoriteColor }}>
      {" "}
      {item.name}
    </li>
  ));

  return (
    <div>
      <i>
        <ul>{renderList}</ul>
      </i>
    </div>
  );
}
