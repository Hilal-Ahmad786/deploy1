/* eslint-disable @next/next/no-img-element */
import React from "react";

import PopUp from "../../components/PopUp";

import PopupLayout from "../../layouts/PopupLayout";
const Home3 = () => {
 React.useEffect(() => {
   document.querySelector("body").classList.add("homepage");
 }, []);
  return (
    <PopupLayout>
      <PopUp />
    </PopupLayout>
  );
};

export default Home3;
