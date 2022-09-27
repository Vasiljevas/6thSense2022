import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { orangeCloseButton, sideMenuLogo } from "../../../assets";
import CloseButton from "../../../components/CloseButton";
import Menu from "./Menu";
import ModelList from "./ModelList";

import "./styles.css";

const useOnClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mouseup", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mouseup", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
};

const SideMenuContainer = (props) => {
  const { isSideMenuActive, setIsSideMenuActive, isOpenDyslexicActive } = props;

  const [isListActive, setIsListActive] = useState(false);
  const history = useHistory();
  const ref = useRef();

  useOnClick(ref, () => {
    setIsListActive(false);
    setIsSideMenuActive();
  });

  return (
    <div
      className={clsx(
        "side-menu",
        isSideMenuActive && "open",
        isOpenDyslexicActive && "open-dyslexic"
      )}
      ref={ref}
    >
      <CloseButton
        onClick={() => {
          setIsListActive(false);
          setIsSideMenuActive();
        }}
        icon={orangeCloseButton}
        tabIndex={isSideMenuActive ? "0" : "-1"}
      />
      <div
        className="logo"
        onClick={() => history.push("/")}
        onKeyPress={() => history.push("/")}
        role="button"
        tabIndex={isSideMenuActive ? "0" : "-1"}
      >
        <img src={sideMenuLogo} alt="" />
      </div>
      <Menu
        isListActive={isListActive}
        setIsListActive={setIsListActive}
        isSideMenuActive={isSideMenuActive}
      />
      <ModelList
        isListActive={isListActive}
        isSideMenuActive={isSideMenuActive}
        isOpenDyslexicActive={isOpenDyslexicActive}
      />
    </div>
  );
};

export default SideMenuContainer;

SideMenuContainer.propTypes = {
  isSideMenuActive: PropTypes.bool.isRequired,
  setIsSideMenuActive: PropTypes.func.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
