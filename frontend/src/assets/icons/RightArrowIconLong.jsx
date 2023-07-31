import React from "react";
import PropTypes from "prop-types";
const RightArrowIconLong = ({ css }) => {
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
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};

RightArrowIconLong.propTypes = {
  css: PropTypes.string.isRequired,
};

export default RightArrowIconLong;
