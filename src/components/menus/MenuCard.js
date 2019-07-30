import React from "react";

const MenuCard = ({ menu }) => {
  return (
    <div class="ui card">
      <div class="image">
        <img src={menu.menuImage} alt="menuImage" />
      </div>
      <div class="content">
        <a class="header" href={`/menus/{menu.menuId}`}>
          {menu.name}
        </a>
        <div class="meta">
          <span class="date">{menu.price}</span>
        </div>
        <div class="description">{menu.type}</div>
      </div>
    </div>
  );
};

export default MenuCard;
