import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const TailwindNavbar = (props) => {
  let [ expanded, setExpanded ] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <header className={"text-white lg:px-16 px-6 bg-black flex flex-wrap items-center fixed w-full z-50 transition-all duration-200 " + props.className || ""}>
      <div className="flex items-center justify-between flex-1">
        <a href={props.home}>
          {props.brand}
        </a>
      </div>

      <button htmlFor="menu-toggle" className="block pointer-cursor lg:hidden" onClick={toggleExpanded}>
        {props.toggle}
      </button>

      <div className={"w-full lg:flex lg:items-center lg:w-auto " + (expanded ? "" : "hidden")} id="menu">
        {props.children}
      </div>
    </header>
  );
}

TailwindNavbar.propTypes = {
  brand: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  home: PropTypes.string,
  toggle: PropTypes.node,
  className: PropTypes.string
}

TailwindNavbar.defaultProps = {
  home: "/",
  toggle: (
    <svg className="text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  ),
}
