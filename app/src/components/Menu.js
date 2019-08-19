import React from "react";
import cn from "classnames/bind";

import style from "./menu.scss";

const cx = cn.bind(style);

const menuItems = [{ label: "Markets", target: "/", active: true }];

const Menu = () => (
  <nav className={cx("menu")}>
    <ul>
      {menuItems.map(({ label, target, active }) => (
        <li className={cx("menu-item", { active })} key={target}>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  </nav>
);

Menu.propTypes = {};

export default Menu;