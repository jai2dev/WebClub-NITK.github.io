import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import imgUrl from "../../assets/images/webclub-logo-blue.png";
import "../../styles/nav.css";

// const Nav = props => {
//   // Helper function  to combine classes
//   function classList(...classes) {
//     return classes.filter(item => !!item).join(" ");
//   }

//   const imageUrl = `url(${imgUrl})`;
//   const [navBackground, setNavBackground] = useState(false);
//   const navRef = useRef();
//   navRef.current = navBackground;

//   // Code to handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       const show = window.scrollY > 670;
//       if (navRef.current !== show) {
//         setNavBackground(show);
//       }
//     };
//     document.addEventListener("scroll", handleScroll);
//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Styles to add on scroll if transp==="true"

//   let divStyle;
//   if (props.transp === "true") {
//     divStyle = {
//       transition: "2s ease",
//       backgroundColor: navBackground ? "white" : "transparent",
//       color: navBackground ? "#1490e4" : "#b3d3f6"
//     };
//   } else {
//     divStyle = {
//       backgroundColor: "white",
//       color: "#1490e4"
//     };
//   }

//   return (
//     <div
//       className={classList("nav", props.sticky === "true" && "nav-sticky")}
//       style={divStyle}
//     >
//       <div className="nav-container">
//         <div className="clubLogo">
//           <span className="logo" style={{ backgroundImage: imageUrl }} />
//           <h1>WebClub</h1>
//         </div>
//         <ul>
//           <li>Home</li>
//           <li>Events</li>
//           <li>Team</li>
//           <li>Blog</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

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

  let divStyle;
  if (props.transp === "true") {
    divStyle = {
      transition: "2s ease",
      backgroundColor: navBackground ? "white" : "transparent",
      color: navBackground ? "#1490e4" : "#b3d3f6",
      top: "0",
      position: "fixed",
      zIndex: "1"
    };
  } else {
    divStyle = {
      backgroundColor: "white",
      color: "#1490e4",
      top: "0",
      position: "fixed",
      zIndex: "1"
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
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/events">
            <li>Events</li>
          </Link>
          <Link to="/members">
            <li>Team</li>
          </Link>
          <Link to="/">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
