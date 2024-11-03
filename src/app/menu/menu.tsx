"use client";
import { FC } from "react";
import style from "./menu.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
const Menu: FC = () => {
  return (
    <div className={style["container"]}>
      <Link href={"/"} className={style["left"]}>
        <GiHamburgerMenu className={style["icon"]} />
        <span className={style["color"]}>Menu</span>
      </Link>
      <Link href={"/"} className={style["right"]}>
        Logo
      </Link>
    </div>
  );
};

export default Menu;
