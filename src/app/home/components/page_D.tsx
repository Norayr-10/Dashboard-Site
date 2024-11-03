"use client";
import { FC } from "react";
import style from "../style/page_D.module.css";

const Page_D: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["formed"]}>
        <div className={style["title"]}>
          <p>Recent Comments</p>
        </div>
        <div className={style["description"]}>
          <div className={style["image"]}>
            <img src="project_img_2.png" alt="" />
          </div>
          <div className={style["about_image"]}>
            <div className={style["up"]}>
              <span>
                <b>John </b>
              </span>{" "}
              <span> Sep 29, 2014, 9:12 PM</span>
            </div>
            <div className={style["down"]}>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>

        <div className={style["description_A"]}>
          <div className={style["image"]}>
            <img src="project_img_3.png" alt="" />
          </div>
          <div className={style["about_image_A"]}>
            <div className={style["up"]}>
              <span>
                <b>Bo </b>
              </span>{" "}
              <span> Sep 28, 2014, 10:15 PM</span>
            </div>
            <div className={style["down"]}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_D;
