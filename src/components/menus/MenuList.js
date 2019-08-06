import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import { fetchMenus } from "../../actions";
import Spinner from "../Spinner";

class MenuList extends React.Component {
  componentDidMount() {
    this.props.fetchMenus();
  }
  render() {
    console.log("I am the menus", this.props.menus.length);

    const renderedMenus = () => {
      if (this.props.menus.length === 0) {
        return <div>No menus to display</div>;
      } else if (this.props.menus.length > 0) {
        return this.props.menus.map((menu, index) => {
          return (
            <div className="column" key={menu.menuId}>
              <MenuCard menu={menu} />
            </div>
          );
        });
      } else {
        return <Spinner message="Please wait for menus to load" />;
      }
    };

    return (
      <>
        <Link
          to="/menus/new"
          className="ui left button primary"
          style={{ position: "relative", left: "88%", bottom: "8px" }}
        >
          CREATE MENU
        </Link>
        <div className="ui stackable four column grid">{renderedMenus()}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    menus: state.menus,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchMenus }
)(MenuList);
