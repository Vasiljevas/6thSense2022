import React from "react";
import PropTypes from "prop-types";
import IconButton from "../../../components/IconButton";
import locales from "../../../enums/locales.json";
import {
  menu,
  langLT,
  langEN,
  camera,
  info,
  sound,
  dashedSound,
  dashedCamera,
} from "../../../assets";

import "./styles.css";

const ModelViewFooter = (props) => {
  const {
    toggleIsInfoModalOpen,
    onPlaySound,
    onStopSound,
    isSoundPlaying,
    isArActive,
    toggleIsArActive,
    isArDisabled,
    locale,
    switchToEn,
    switchToLt,
    isLoading,
    toggleIsSideMenuActive,
  } = props;
  return (
    <div className="footer">
      <IconButton onClick={toggleIsSideMenuActive} src={menu} alt="Meniu" />
      <IconButton onClick={toggleIsInfoModalOpen} src={info} alt="Info" />
      <IconButton
        onClick={() => onPlaySound(locale)}
        src={sound}
        alt="Paleisti garso įrašą"
        hidden={isSoundPlaying}
      />
      <IconButton
        onClick={onStopSound}
        src={dashedSound}
        alt="Sustabdyti garso įrašą"
        hidden={!isSoundPlaying}
      />
      <IconButton
        onClick={toggleIsArActive}
        src={camera}
        alt="Įjungti AR"
        hidden={isArActive}
        disabled={isArDisabled || isLoading}
      />
      <IconButton
        onClick={toggleIsArActive}
        src={dashedCamera}
        alt="Išjungti AR"
        hidden={!isArActive}
        disabled={isLoading}
      />
      <IconButton
        onClick={switchToEn}
        src={langLT}
        alt="Kalbos pasirinkimas"
        hidden={locale !== locales.LT}
      />
      <IconButton
        onClick={switchToLt}
        src={langEN}
        alt="Kalbos pasirinkimas"
        hidden={locale !== locales.EN}
      />
    </div>
  );
};

export default ModelViewFooter;

ModelViewFooter.propTypes = {
  toggleIsInfoModalOpen: PropTypes.func.isRequired,
  onPlaySound: PropTypes.func.isRequired,
  onStopSound: PropTypes.func.isRequired,
  isSoundPlaying: PropTypes.bool.isRequired,
  isArActive: PropTypes.bool.isRequired,
  toggleIsArActive: PropTypes.func.isRequired,
  isArDisabled: PropTypes.bool.isRequired,
  switchToEn: PropTypes.func.isRequired,
  switchToLt: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  toggleIsSideMenuActive: PropTypes.func.isRequired,
};
