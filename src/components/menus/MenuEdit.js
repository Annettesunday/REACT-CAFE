import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { editMenu, fetchMenu } from "../../actions";
import MenuForm from "./MenuForm";

class MenuEdit extends React.Component {
  componentDidMount() {
    this.props.fetchMenu(this.props.match.params.id);
    // console.log("I have been selected", this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log("I have been selected", this.props.match.params.id);
    console.log(" am getting hereI")

    this.props.editMenu(this.props.match.params.id, formValues);
  };
  render() {
    console.log("from state", this.props.menu.menuImage);
    return (
      <>
        <h3>Edit A Menu</h3>
        <MenuForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(
            this.props.menu,
            "price",
            "type",
            "name",
            "menuImage"
          )}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.menus
  };
};

export default connect(
  mapStateToProps,
  { editMenu, fetchMenu }
)(MenuEdit);
