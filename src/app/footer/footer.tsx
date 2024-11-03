"use client";

import { FC } from "react";
import style from "./footer.module.css";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["formed"]}>
        <h2>FOOTER</h2>
        <span>
          Powered by
          <Link
            className={style["link"]}
            href={
              "https://www.w3schools.com/w3css/tryw3css_templates_analytics.htm"
            }
          >
            Norayr Tanielian{" "}
          </Link>
        </span>
      </div>
    </div>
  );
};
export default Footer;
