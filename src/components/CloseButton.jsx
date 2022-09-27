import React from "react";
import PropTypes from "prop-types";

const CloseButton = (props) => {
  const { onClick, icon, tabIndex } = props;
  return (
    <div
      className="close-button"
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={tabIndex}
    >
      <img src={icon} alt="" />
    </div>
  );
};

export default CloseButton;

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
};

CloseButton.defaultProps = {
  tabIndex: "0",
};
