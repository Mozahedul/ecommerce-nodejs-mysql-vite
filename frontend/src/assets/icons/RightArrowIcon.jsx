import React from "react";
import PropTypes from "prop-types";

const RightArrowIcon = ({ css }) => {
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
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

RightArrowIcon.propTypes = {
  css: PropTypes.string.isRequired,
};

export default RightArrowIcon;
