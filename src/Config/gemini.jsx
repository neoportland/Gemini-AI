// /* eslint-disable no-unused-vars */
// import React from "react";
// import axios from "axios";
// const gemini = () => {
//   async function generateAnswer(prompt) {
//     console.log("Loading....");
//     const response = await axios({
//       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCl8fGtoi-_DfrWd3PeTk_kZYo4pQsyuxI`,
//       method: "post",
//       data: {
//         contents: [{ parts: [{ text: prompt }] }],
//       },
//     });
//     console.log(
//       "selam bir sonuç var mı :",
//       response[`data`][`candidates`][0][`content`][`parts`][0][`text`]
//     );
//   }
//   generateAnswer("türkiye hakakri hakkında ne düşünüyorsun ");

//   return <div>gemini</div>;
// };

// export default gemini;
