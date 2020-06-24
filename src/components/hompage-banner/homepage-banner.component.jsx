import React from "react";

import "./homepage-banner.styles.scss";
import Star from "../star/star.component";
const HomePageBanner = () => {
  return (
    <div className="homebanner-wrapper">
      <div className="homebanner">
        <Star top="52" left="31" linkUrl="/category/3/monitors" />
        <Star top="80" left="20" linkUrl="/category/4/keyboards" />
        <Star top="80" left="43" linkUrl="/category/6/mouse" />
        <Star top="40" left="80" linkUrl="/category/2/computer-cases" />
      </div>
    </div>
  );
};

export default HomePageBanner;
