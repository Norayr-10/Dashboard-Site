"use client";

import { FC } from "react";
import style from "../style/page_C.module.css";

const Page_C: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["formed"]}>
        <p>Recent Users</p>
        <div className={style["content"]}>
          <div className={style["content_A"]}>
            <div className={style["image"]}>
              {" "}
              <img src="Final_1.png" alt="" />
            </div>
            <span>
              <b>Mike</b>
            </span>
          </div>
          <div className={style["content_A"]}>
            <div className={style["image"]}>
              <img src="project_img.png" alt="" />
            </div>
            <span>
              <b>Jill</b>
            </span>
          </div>
          <div className={style["content_A"]}>
            <div className={style["image"]}>
              {" "}
              <img src="project_img_1.png" alt="" />
            </div>
            <span>
              <b>Jane</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_C;
