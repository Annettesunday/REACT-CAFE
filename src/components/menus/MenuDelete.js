import React from "react";
import Modal from "../Modal";
import history from "../../history";

const MenuDelete = () => {
  const actions = (
    <>
      <button className="ui negative button">Delete</button>
      <button className="ui positive button">Cancel</button>
    </>
  );
  return (
    <Modal
      title="Delete Menu"
      content="Are you sure you want to delete this menu?"
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

export default MenuDelete;
