import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions";
import store from "../reducers";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    const { authenticated, logout } = this.props;

    const authButton = (
      <Link
        to="/login"
        className="ui  floated header"
        onClick={authenticated ? () => logout() : null}
      >
        {authenticated ? "Logout " : "Login"}
      </Link>
    );

    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          React Cafe
        </Link>
        <div className="right menu">
          <Link to="/" className="ui left floated header">
            My Cafe
          </Link>
          {authButton}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.user.authenticated
  };
};
export default connect(
  mapStateToProps,
  { logout }
)(Header);
