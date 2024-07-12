/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Main.css";
import { useState } from "react";
import { assets } from "../../assets/assets";

const Main = ({ sendProps, answer, loading }) => {
  const [inputValue, setInputValue] = useState("");
  const [togle, setTogle] = useState(true);

  console.log("input value :", inputValue);
  function cahngeing(e) {
    setInputValue(e.target.value);
  }

  const propsSendToApp = () => {
    setTogle(false);
    sendProps(inputValue);
    // setInputValue("");
  };

  return (
    <div className="main">
      <div className="nav">
        <p>NevzatAI</p>
        <img src={assets.nevzat} alt="" />
      </div>
      {/* soru girildikten sonra değişen anahtar  */}
      {togle ? (
        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello... Dev </span>
            </p>
            <p>How Can I Help You Today?</p>
          </div>
          <div className="cards">
            <div className="card box">
              <p>Suggest beatiful places to see on upcoming road trip </p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Tell me about React js and React native</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
          <div className="main-bottom">
            <div className="search-box">
              <input
                value={inputValue}
                onChange={cahngeing}
                type="text"
                placeholder="Enter a prompt here "
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={propsSendToApp} src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
              NevzatAI may display innacurate info, including about people, so
              double-check its responses. Your privacy and NevzatAI Apps
            </p>
          </div>
        </div>
      ) : (
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{inputValue} </p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <p> {answer} </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
