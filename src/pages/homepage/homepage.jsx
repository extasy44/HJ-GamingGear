import React from "react";

import "./homepage.styles.scss";
import HomePageBanner from "../../components/hompage-banner/homepage-banner.component";
import HomepageCategory from "../../components/homepage-category/homepage-category.component";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <HomePageBanner />
        <HomepageCategory />
      </div>
    );
  }
}

export default HomePage;
