"use client";
import { FC } from "react";
import style from "../style/page_B.module.css";
import { FaArrowRight } from "react-icons/fa";

const Page_B: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["formed"]}>
        <div className={style["formed_A"]}>
          <p>Countries</p>
        </div>
        <div className={style["formed_B"]}>
          <div className={style["first"]}>
            <span>United States </span>
            <span>65%</span>
          </div>
          <div className={style["secound"]}>
            <span>UK</span>
            <span>15.7%</span>
          </div>
          <div className={style["first"]}>
            <span>Russia</span>
            <span>5.6%</span>
          </div>
          <div className={style["secound"]}>
            <span>Spain</span>
            <span>2.1%</span>
          </div>
          <div className={style["first"]}>
            <span>India</span>
            <span>1.9%</span>
          </div>
          <div className={style["secound"]}>
            <span>France</span>
            <span>1.5%</span>
          </div>
        </div>
        <div className={style["formed_C"]}>
          <button className={style["btn"]}>
            More Countries <FaArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page_B;
