import React from "react";
import PropTypes from "prop-types";

const LeftArrowIcon = ({ css }) => {
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
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

LeftArrowIcon.propTypes = {
  css: PropTypes.string.isRequired,
};

export default LeftArrowIcon;
