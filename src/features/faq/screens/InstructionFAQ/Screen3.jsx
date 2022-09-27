import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import {
  megaphone,
  bigInfo,
  text,
  orangeInfo,
  orangeSound,
} from "../../../../assets";
import ScreenWrapper from "../ScreenWrapper";

const Screen = (props) => {
  const { isOpenDyslexicActive } = props;
  return (
    <ScreenWrapper
      title="FAQ-3-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <div className="modal-grid">
        <img src={megaphone} alt="" />
        <div className="text-align-left">
          <FormattedMessage
            id="FAQ-3-CONTENT-1"
            values={{
              info: () => (
                <span className="text-icon">
                  <img src={orangeInfo} alt="" />
                </span>
              ),
              sound: () => (
                <span className="text-icon">
                  <img src={orangeSound} alt="" />
                </span>
              ),
            }}
          />
        </div>
        <img src={bigInfo} alt="" />
        <div className="text-align-left">
          <FormattedMessage
            id="FAQ-3-CONTENT-2"
            values={{
              info: () => (
                <span className="text-icon">
                  <img src={orangeInfo} alt="" />
                </span>
              ),
              sound: () => (
                <span className="text-icon">
                  <img src={orangeSound} alt="" />
                </span>
              ),
            }}
          />
        </div>
        <img src={text} alt="" />
        <div className="text-align-left">
          <FormattedMessage
            id="FAQ-3-CONTENT-3"
            values={{
              info: () => (
                <span className="text-icon">
                  <img src={orangeInfo} alt="" />
                </span>
              ),
              sound: () => (
                <span className="text-icon">
                  <img src={orangeSound} alt="" />
                </span>
              ),
            }}
          />
        </div>
      </div>
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
