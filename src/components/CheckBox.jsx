import React from "react";
import PropTypes from "prop-types";
import { checkMark, checkMarkChecked } from "../assets";

const CheckBox = ({ checked, onClick, tabIndex }) => (
  <div
    className="checkbox"
    onClick={onClick}
    onKeyPress={onClick}
    role="button"
    tabIndex={tabIndex}
  >
    {checked ? (
      <img src={checkMarkChecked} alt="" />
    ) : (
      <img src={checkMark} alt="" />
    )}
  </div>
);

export default CheckBox;

CheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.string,
};

CheckBox.defaultProps = {
  tabIndex: "0",
};
