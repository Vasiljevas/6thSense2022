import React from "react";
import PropTypes from "prop-types";

const IconStar = (props) => {
  const { isFilled } = props;

  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512"
      >
        <polygon
          fill={isFilled ? "#1D1D1B" : "none"}
          stroke="#1D1D1B"
          strokeWidth="37.6152"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="
          259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 
          29.274,197.007 188.165,173.919 "
        />
      </svg>
    </>
  );
};

export default IconStar;

IconStar.propTypes = {
  isFilled: PropTypes.bool,
};

IconStar.defaultProps = {
  isFilled: false,
};
