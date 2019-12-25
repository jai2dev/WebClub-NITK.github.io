import React, { useEffect, useRef, useState } from "react";
import BigNav from "./NavBig";
import SmallNav from "./SmallNav";
const Nav = props => {
  let initialValue;
  if (window.innerWidth < 600) {
    initialValue = true;
  } else {
    initialValue = false;
  }
  const [navSize, setnavSize] = useState(initialValue);
  const navRef = useRef();
  navRef.current = navSize;
  useEffect(() => {
    const handleResize = () => {
      const show = window.innerWidth < 600;
      if (navRef.current !== show) {
        setnavSize(show);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return navSize ? (
    <SmallNav sticky={props.sticky} />
  ) : (
    <BigNav sticky={props.sticky} />
  );
};
export default Nav;
