import React from "react";

import "./homepage-banner.styles.scss";
import Star from "../star/star.component";
const HomePageBanner = () => {
  return (
    <div className="homebanner-wrapper">
      <div className="homebanner">
        <Star top="52" left="31" />
        <Star top="80" left="20" />
        <Star top="80" left="43" />
        <Star top="40" left="80" />
      </div>
    </div>
  );
};

export default HomePageBanner;
