/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import runChat from "../Config/Nevzatai";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (promt) => {
    await runChat(promt);
  };
  onSent(" console log da veri var ama arayüzde yok neden ? ");

  const constextValue = {};

  return;
  <Context.Provider value={constextValue}>{props.children}</Context.Provider>;
};
export default ContextProvider;
