import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteMenu } from "../../actions";

const MenuCard = ({ menu, deleteMenu }) => {
  return (
    <>
      <div className="ui card">
        <div className="image">
          <img src={menu.menuImage} alt="menuImage" />
        </div>
        <div className="content">
          <a className="header" href={`/menus/{menu.menuId}`}>
            {menu.type}
          </a>
          <div className="meta">
            <span
              className="date"
              style={{ left: "220px", position: "relative" }}
            >
              $ {menu.price}
            </span>
          </div>
          <div className="description">{menu.name}</div>
        </div>
      </div>
      <div>
        <button
          className="positive ui button"
          onClick={() => deleteMenu(menu.menuId)}
        >
          Delete Menu
        </button>
        <Link
          className="negative ui button"
          to={`/menus/edit/${menu.menuId}`}
        >
          Edit Menu
        </Link>
      </div>
    </>
  );
};

export default connect(
  null,
  { deleteMenu }
)(MenuCard);
