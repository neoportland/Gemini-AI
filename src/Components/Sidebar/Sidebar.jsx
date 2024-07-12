/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="sidebar">
      {/* üst kısımdaki iconlar burdan başlar   */}
      <div className="top">
        <img
          onClick={() => setSidebar((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {sidebar ? <p>New Chat</p> : null}
        </div>

        {sidebar ? (
          <div className="recent">
            <p className="recent-title">Recent</p>

            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is Reacta...</p>
            </div>
          </div>
        ) : null}
      </div>
      {/* alt kısımdaki üç icon burdan başlar  */}
      <div className="bottom">
        <div className="bottom-item recent-entry ">
          <img src={assets.question_icon} alt="" />
          {sidebar ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry ">
          <img src={assets.history_icon} alt="" />
          {sidebar ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry ">
          <img src={assets.setting_icon} alt="" />
          {sidebar ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
