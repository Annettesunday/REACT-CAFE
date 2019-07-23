import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions";

class MenuList extends React.Component {
  render() {
    return <div>{this.props.user.credentials.userName}</div>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { getUser }
)(MenuList);
