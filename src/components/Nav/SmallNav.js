import React from "react";
import "../../styles/nav.css";
import imgUrl from "../../assets/images/webclub-logo-blue.png";

const MobileNav = props => {
  function classList(...classes) {
    return classes.filter(item => !!item).join(" ");
  }
  return (
    <div
      className={classList(
        "mnav",
        props.sticky === "true" && "nav-sticky",
        props.sticky === "false" && "nav-fixed"
      )}
    >
      <i id="showMenu" className="fa fa-bars mnav-menu" aria-hidden="true" />
      <span className="logo" />
    </div>
  );
};

export default MobileNav;
