import React from "react";
import PropTypes from "prop-types";

const MenuDoubleBarIcon = ({ css }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={css}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </svg>
  );
};

MenuDoubleBarIcon.propTypes = {
  css: PropTypes.string.isRequired,
};

export default MenuDoubleBarIcon;
