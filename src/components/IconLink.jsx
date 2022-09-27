import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const IconButton = (props) => {
  const { hidden, to, src, alt, disabled, tabIndex } = props;
  return (
    <>
      {disabled ? (
        <div className={clsx("icon", "disabled", hidden && "hidden")}>
          <img src={src} alt={alt} />
        </div>
      ) : (
        <a
          className={clsx("icon", hidden && "hidden")}
          href={to}
          tabIndex={tabIndex}
        >
          <img src={src} alt={alt} />
        </a>
      )}
    </>
  );
};

export default IconButton;

IconButton.propTypes = {
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  tabIndex: PropTypes.string,
};

IconButton.defaultProps = {
  hidden: false,
  disabled: false,
  tabIndex: "0",
  alt: "",
};
