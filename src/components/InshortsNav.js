import React from "react";
import HamburgerDrawer from "./HamburgerDrawer";
const InshortsNav = ({ setCategory, setLoadMore }) => {
  return (
    <div className="header">
      <div className="hamburgerIcon">
        <HamburgerDrawer setCategory={setCategory} setLoadMore={setLoadMore} />
      </div>
      <img src="https://m.inshorts.com/dist/images/home_page/logo.png" />
    </div>
  );
};

export default InshortsNav;
