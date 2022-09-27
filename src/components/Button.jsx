import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

const Button = (props) => {
  const { className, text, onClick, tabIndex } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={tabIndex}
    >
      <FormattedMessage id={text} />
    </div>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
};

Button.defaultProps = {
  tabIndex: "0",
};
