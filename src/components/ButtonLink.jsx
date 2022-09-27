import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

const Button = (props) => {
  const { className, text, to, tabIndex, download } = props;
  return (
    <a className={className} href={to} tabIndex={tabIndex} download={download}>
      <FormattedMessage id={text} />
    </a>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
  download: PropTypes.bool,
};

Button.defaultProps = {
  tabIndex: "0",
  download: false,
};
