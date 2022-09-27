import React, { useState, useEffect, useRef } from "react";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import PropTypes from "prop-types";

import "./stylesDesktop.css";
import "./stylesMobile.css";

const useOnClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    };
  }, []);
};

const SideButton = (props) => {
  const { src, text, onClick, isLong } = props;
  const [isButtonActive, setIsButtonActive] = useState(false);
  const ref = useRef();

  useOnClick(ref, () => {
    setIsButtonActive(false);
  });

  return (
    <div
      className={clsx(
        "side-button",
        isButtonActive && "open",
        isLong && "long",
        !isLong && "short"
      )}
      ref={ref}
      onClick={() => {
        setIsButtonActive(true);
      }}
      onKeyPress={() => {
        setIsButtonActive(true);
      }}
      role="button"
      tabIndex="0"
    >
      <div className="icon">
        <img src={src} alt="" />
      </div>
      <div
        className="content"
        onClick={onClick}
        onKeyPress={onClick}
        role="button"
        tabIndex={clsx(isButtonActive && "0", !isButtonActive && "-1")}
      >
        <div>
          <FormattedMessage id={text} />
        </div>
      </div>
    </div>
  );
};

export default SideButton;

SideButton.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLong: PropTypes.bool,
};

SideButton.defaultProps = {
  isLong: false,
};
