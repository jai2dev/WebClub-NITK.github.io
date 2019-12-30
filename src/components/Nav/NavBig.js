import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import imgUrl from "../../assets/images/webclub-logo-blue.png";
import "../../styles/nav.css";

const Nav = props => {
  // Helper function  to combine classes
  function classList(...classes) {
    return classes.filter(item => !!item).join(" ");
  }

  const imageUrl = `url(${imgUrl})`;
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;

  // Code to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 670;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Styles to add on scroll

  let divStyle;
  if (props.transp === "false") {
    divStyle = {
      background: "white",
      color: "#1490e4"
    };
  } else {
    divStyle = {
      transition: "2s ease",
      backgroundColor: navBackground ? "white" : "transparent",
      color: navBackground ? "#1490e4" : "#b3d3f6"
    };
  }

  return (
    <div
      className={classList(
        "nav",
        props.sticky === "true" && "nav-sticky",
        props.sticky === "false" && "nav-fixed"
      )}
      style={divStyle}
    >
      <div className="nav-container">
        <div className="clubLogo">
          <span className="logo" style={{ backgroundImage: imageUrl }} />
          <h1>WebClub</h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/members">Team</Link>
          <Link to="/timeline">Timeline</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
