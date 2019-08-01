import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import history from "../../history";
import { deleteMenu } from "../../actions";

const MenuDelete = props => {
  console.log(props.menu);
  const actions = (
    <>
      <button
        onClick={() => props.deleteMenu(props.match.params.id)}
        className="ui negative button"
      >
        Delete
      </button>
      <button onClick={() => history.push("/")} className="ui positive button">
        Cancel
      </button>
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

const mapStateToProps = state => {
  return {
    menu: state.menus
  };
};

export default connect(
  mapStateToProps,
  { deleteMenu }
)(MenuDelete);
