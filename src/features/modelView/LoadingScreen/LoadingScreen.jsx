import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { spinner } from "../../../assets";

import "./styles.css";

const LoadingScreen = ({ text }) => (
  <div className="loading-screen">
    <img src={spinner} alt="" />
    <FormattedMessage id={text} defaultMessage="" />
  </div>
);

export default LoadingScreen;

LoadingScreen.propTypes = {
  text: PropTypes.string,
};

LoadingScreen.defaultProps = {
  text: "",
};
