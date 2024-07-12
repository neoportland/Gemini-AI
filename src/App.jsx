/* eslint-disable no-unused-vars */
import axios from "axios";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);

  async function generateAnswer() {
    console.log("Loading....");
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCl8fGtoi-_DfrWd3PeTk_kZYo4pQsyuxI`,
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });

    console.log("ai response => .... :", response);

    console.log("Data :", response.request.readyState); // b 4 ise işlem başarılı
    console.log("if öncesi loading :", loading);
    if (response.request.status === 200) {
      setLoading(!loading);
      setAnswer(
        response[`data`][`candidates`][0][`content`][`parts`][0][`text`]
      );
    }

    console.log(
      "ilk sonuçlar :",
      response[`data`][`candidates`][0][`content`][`parts`][0][`text`]
    );
  }

  function sendProps2(event) {
    setQuestion(event);
  }

  useEffect(() => {
    generateAnswer();
  }, [sendProps2]);

  console.log("selam loading durumu :", loading);
  console.log("selam qestion durumu :", question);
  console.log("selam answer durumu :", answer);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Main sendProps={sendProps2} answer={answer} loading={loading} />
    </div>
  );
};

export default App;
