import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

const IconButton = (props) => {
  const { hidden, onClick, src, alt, disabled, tabIndex } = props;
  return (
    <>
      {disabled ? (
        <div className={clsx("icon", "disabled", hidden && "hidden")}>
          <img src={src} alt={alt} />
        </div>
      ) : (
        <div
          className={clsx("icon", hidden && "hidden")}
          onClick={onClick}
          onKeyPress={onClick}
          role="button"
          tabIndex={tabIndex}
        >
          <img src={src} alt={alt} />
        </div>
      )}
    </>
  );
};

export default IconButton;

IconButton.propTypes = {
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
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
