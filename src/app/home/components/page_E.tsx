"use client";
import { FC } from "react";
import style from "../style/page_E.module.css";

const Page_E: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["formed"]}>
        <h2 className={style["title"]}>Demographic</h2>
        <p>Language</p>
        <p>Country</p>
        <p>City</p>
      </div>
      <div className={style["formed"]}>
        <h2 className={style["title_A"]}>System</h2>
        <p>Browser</p>
        <p>OS</p>
        <p>More</p>
      </div>
      <div className={style["formed"]}>
        <h2 className={style["title_B"]}>Target</h2>
        <p>Users</p>
        <p>Active</p>
        <p>Geo</p>
      </div>
    </div>
  );
};
export default Page_E;
