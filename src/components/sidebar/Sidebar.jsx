import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
    const [extended,setExtended]=useState(false)
  return (
<div className="sidebar" style={extended ? { minWidth: "230px" } : {}}>
      <div className="top">
        <img className="menu" 
        onClick={()=>setExtended(!extended)}
        src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended?
          <p>New chat</p>:null}
        </div>
        {extended?
        <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is react</p>
            </div>
        </div>:null}
      </div>

      <div className="bottom">
        <div className="botton-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended?<p>Help</p>:null}
        </div>
        <div className="botton-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended?<p>Activity</p>:null}
        </div>
        <div className="botton-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended?<p>Setings</p>:null}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
