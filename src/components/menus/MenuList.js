import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import { fetchMenus } from "../../actions";

class MenuList extends React.Component {
  componentDidMount() {
    this.props.fetchMenus();
  }
  render() {
    const renderedMenus =
      this.props.menus.length > 0 ? (
        this.props.menus.map((menu, index) => {
          return (
            <div className="column">
              <MenuCard key={index} menu={menu} />
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      );
    return (
      <>
        <div>{this.props.user.credentials.userName}</div>
        <Link to="/menus/new" className="ui center button primary">
          CREATE MENU
        </Link>
        <div className="ui stackable four column grid">{renderedMenus}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    menus: state.menus
  };
};

export default connect(
  mapStateToProps,
  { fetchMenus }
)(MenuList);
