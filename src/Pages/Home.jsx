import React from "react";
import { Banner } from "../Components/Home/Banner";
import { Videos } from "../Components/Home/Videos";
import { SobreBanner } from "../Components/Home/SobreBanner";

export const Home = () => {

  return (
    <>
      <Banner />
      <SobreBanner />
      <Videos />
    </>
  );
};
