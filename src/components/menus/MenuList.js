import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { getUser } from "../../actions";

class MenuList extends React.Component {
  render() {
    return (
      <>
        <div>{this.props.user.credentials.userName}</div>
        <Link to="/menus/new" className="ui center button primary">
          CREATE MENU
        </Link>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  // { getUser }
)(MenuList);
