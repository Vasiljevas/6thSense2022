import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import ModelList from "./ModelList";
import BottomMenu from "./BottomMenu/BottomMenu";
import Welcome from "./Welcome";
import SideButton from "./SideButton/SideButton";
import { globe, dyslexia } from "../../assets";
import locales from "../../enums/locales.json";
import * as actions from "../../state";

import "./styles.css";

const Container = (props) => {
  // eslint-disable-next-line prettier/prettier
  const { locale, isOpenDyslexicActive, setIsOpenDyslexicActive, setLocale }  = props;

  const myRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    if (
      history.location.state !== undefined &&
      history.location.state.from === "faq"
    ) {
      myRef.current.scrollIntoView();
    }
  }, []);

  return (
    <div className="main-menu-wrapper">
      <div
        className={clsx("main-menu", isOpenDyslexicActive && "open-dyslexic")}
      >
        <Welcome isOpenDyslexicActive={isOpenDyslexicActive} />
        <ModelList isOpenDyslexicActive={isOpenDyslexicActive} />
        <div ref={myRef}>
          <BottomMenu
            isOpenDyslexicActive={isOpenDyslexicActive}
            locale={locale}
          />
        </div>
      </div>
      <SideButton
        src={globe}
        text={clsx(
          locales.LT === locale && "LT",
          locales.EN === locale && "EN"
        )}
        onClick={() =>
          setLocale(locale === locales.LT ? locales.EN : locales.LT)
        }
      />
      <SideButton
        src={dyslexia}
        text="OPEN-DYSLEXIC"
        onClick={() => setIsOpenDyslexicActive(!isOpenDyslexicActive)}
        isLong
      />
    </div>
  );
};

const mapStateToProps = ({ locale, isOpenDyslexicActive }) => ({
  locale,
  isOpenDyslexicActive,
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpenDyslexicActive: (payload) =>
    dispatch(actions.setIsOpenDyslexicActive(payload)),
  setLocale: (payload) => dispatch(actions.setLocale(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

Container.propTypes = {
  locale: PropTypes.string.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
  setIsOpenDyslexicActive: PropTypes.func.isRequired,
  setLocale: PropTypes.func.isRequired,
};
