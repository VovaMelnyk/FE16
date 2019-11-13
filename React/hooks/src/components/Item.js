import React from "react";

const Item = ({ id, text, deleteItem }) => {
  const deleteHandler = () => {
    deleteItem(id);
  };
  return (
    <div key={id} className="item">
      <p>{text}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Item;
