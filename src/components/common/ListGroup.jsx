import React, { Component } from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedItem,
    onItemSelect
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          className={
            item === selectedItem
              ? "list-group-item active"
              : "list-group-item "
          }
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
