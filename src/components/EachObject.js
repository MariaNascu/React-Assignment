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
        <ul className="user-list-ex8">{renderList}</ul>
      </i>
    </div>
  );
}
