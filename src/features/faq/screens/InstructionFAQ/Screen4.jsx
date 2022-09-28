import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import {
  cameraNoBackground,
  orangeMenu,
  modelsEn,
  modelsLt,
} from "../../../../assets";
import locales from "../../../../enums/locales.json";
import ScreenWrapper from "../ScreenWrapper";

const Screen = (props) => {
  const { isOpenDyslexicActive, locale } = props;
  return (
    <ScreenWrapper
      title="FAQ-4-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <div className="text-align-left">
        <FormattedMessage
          id="FAQ-4-CONTENT"
          values={{
            menu: () => (
              <span className="text-icon">
                <img src={orangeMenu} alt="" />
              </span>
            ),
            models: () => (
              <span className="text-icon long">
                <img
                  src={locales.LT === locale && "LT" ? modelsLt : modelsEn}
                  alt=""
                />
              </span>
            ),
            camera: () => (
              <span className="text-icon">
                <img src={cameraNoBackground} alt="" />
              </span>
            ),
            br: () => <br />,
          }}
        />
      </div>
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
  locale: PropTypes.bool.isRequired,
};
