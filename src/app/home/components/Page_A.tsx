"use client";
import { FC } from "react";
import style from "../style/page_A.module.css";
import Link from "next/link";
import {
  FaEnvelope,
  FaUser,
  FaUsers,
  FaEye,
  FaBell,
  FaHistory,
  FaTachometerAlt,
  FaBookmark,
} from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { BiSolidMessageRounded } from "react-icons/bi";
import { RiShareFill } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";

const Page_A: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["left"]}>
        <div className={style["formed"]}>
          <div className={style["formed_A"]}>
            <img src="Final_1.png" alt="" />
          </div>
          <div className={style["formed_B"]}>
            <div className={style["wellcome"]}>
              <p>
                Wellcome,<b>Mike</b>
              </p>
            </div>
            <div className={style["links"]}>
              <Link className={style["link_description"]} href={"#"}>
                <FaEnvelope />
              </Link>
              <Link className={style["link_description"]} href={"#"}>
                <FaUser />
              </Link>
              <Link className={style["link_description"]} href={"#"}>
                <IoIosSettings />
              </Link>
            </div>
          </div>
        </div>
        <div className={style["section"]}>
          <p className={style["dashboard"]}> DASHBOARD</p>
          <p className={style["section_p_A"]}>
            <FaUsers /> Overview
          </p>
          <p className={style["section_p"]}>
            <FaEye /> Views
          </p>
          <p className={style["section_p"]}>
            <FaUsers /> Traffic
          </p>
          <p className={style["section_p"]}>
            <IoDiamond /> Orders
          </p>
          <p className={style["section_p"]}>
            <FaBell /> News
          </p>
          <p className={style["section_p"]}>
            <CiBank /> General
          </p>
          <p className={style["section_p"]}>
            <FaHistory /> History
          </p>
          <p className={style["section_p"]}>
            <IoIosSettings /> Settings
          </p>
        </div>
      </div>

      <div className={style["right"]}>
        <div className={style["right_A"]}>
          <h3>
            {" "}
            <FaTachometerAlt />
          </h3>
          <h2>My Dashboard</h2>
        </div>
        <div className={style["right_B"]}>
          <div className={style["one"]}>
            <div className={style["one_A"]}>
              <BiSolidMessageRounded className={style["link_A"]} />
              <span>52</span>
            </div>

            <div className={style["one_A"]}>
              <p>Messages</p>
            </div>
          </div>
          <div className={style["two"]}>
            <div className={style["one_A"]}>
              <FaEye className={style["link_A"]} />
              <span>99</span>
            </div>
            <div className={style["one_A"]}>
              <p>Views</p>
            </div>
          </div>
          <div className={style["three"]}>
            <div className={style["one_A"]}>
              <RiShareFill className={style["link_A"]} />
              <span>23</span>
            </div>
            <div className={style["one_A"]}>
              <p>Shares</p>
            </div>
          </div>
          <div className={style["four"]}>
            <div className={style["one_A"]}>
              <FaUsers className={style["link_A"]} />
              <span>50</span>
            </div>
            <div className={style["one_A"]}>
              <p>Users</p>
            </div>
          </div>
        </div>
        <div className={style["map_container"]}>
          <div className={style["map_image"]}>
            <p>Regions</p>
            <img src="region_project.jpg" alt="" />
          </div>
          <div className={style["map_description"]}>
            <p>Feeds</p>
            <div className={style["map_description_section"]}>
              <div className={style["about_A"]}>
                <div className={style["description_about_A"]}>
                  <FaUser className={style["user_color"]} />{" "}
                  <span>New record, over 90 views. </span>
                </div>
                <span>10 mins</span>
              </div>
              <div className={style["about_B"]}>
                <div className={style["description_about_A"]}>
                  <FaBell className={style["bell_color"]} />{" "}
                  <span>Database error. </span>
                </div>
                <span>15 mins</span>
              </div>
              <div className={style["about_A"]}>
                <div className={style["description_about_A"]}>
                  <FaUsers className={style["users_color"]} />{" "}
                  <span>New record, over 40 users. </span>
                </div>
                <span>17 mins</span>
              </div>
              <div className={style["about_B"]}>
                <div className={style["description_about_A"]}>
                  <BiSolidMessageRounded className={style["message_color"]} />{" "}
                  <span>New comments. </span>
                </div>
                <span>25 mins</span>
              </div>
              <div className={style["about_A"]}>
                <div className={style["description_about_A"]}>
                  <FaBookmark className={style["bookmark_color"]} />{" "}
                  <span>Check transactions. </span>
                </div>
                <span>28 mins</span>
              </div>
              <div className={style["about_B"]}>
                <div className={style["description_about_A"]}>
                  <MdOutlineComputer className={style["computer_color"]} />{" "}
                  <span>CPU overload. </span>
                </div>
                <span>35 mins</span>
              </div>
              <div className={style["about_A"]}>
                <div className={style["description_about_A"]}>
                  <RiShareFill className={style["share_color"]} />{" "}
                  <span>New shares. </span>
                </div>
                <span>39 mins</span>
              </div>
            </div>
          </div>
        </div>

        <div className={style["stats"]}>
          <p className={style["stats_P"]}>General Stats</p>
          <div className={style["state_A"]}>
            <p>New Visitors</p>
            <div className={style["state_A_content"]}>
              <div className={style["state_A_green"]}>
                <span>25%</span>
              </div>
              <div className={style["state_A_grey"]}></div>
            </div>
          </div>
          <div className={style["state_A"]}>
            <p>New Users</p>
            <div className={style["state_A_content"]}>
              <div className={style["state_A_orage"]}>
                <span>50%</span>
              </div>
              <div className={style["state_B_grey"]}></div>
            </div>
          </div>
          <div className={style["state_A"]}>
            <p>Bounce Rate</p>
            <div className={style["state_A_content"]}>
              <div className={style["state_A_red"]}>
                <span>75%</span>
              </div>
              <div className={style["state_C_grey"]}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_A;



