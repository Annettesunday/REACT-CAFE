import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createImageUrl, createMenu } from "../../actions";
import MenuForm from "./MenuForm";

class MenuCreate extends React.Component {
  onSubmit = formValues => {
    const { name, type, price } = formValues;
    const newMenu = {
      name,
      type,
      price,
      menuImage: this.props.imageUrl
    };
    this.props.createMenu(newMenu);
  };

  render() {
    return (
      <div>
        <h3>Create A menu</h3>
        <MenuForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const renderedForm = reduxForm({
  form: "MenuCreate"
})(MenuCreate);

const mapStateToProps = state => {
  return {
    imageUrl: state.imageUrl,
    menu: state.menus,
    initialValues: state.menus
  };
};

export default connect(
  mapStateToProps,
  { createImageUrl, createMenu }
)(renderedForm);
