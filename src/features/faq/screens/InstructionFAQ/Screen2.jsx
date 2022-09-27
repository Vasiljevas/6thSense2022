import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { instructionGraphic2, cameraNoBackground } from "../../../../assets";
import ScreenWrapper from "../ScreenWrapper";

const Screen = (props) => {
  const { isOpenDyslexicActive } = props;
  return (
    <ScreenWrapper
      title="FAQ-2-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <>
        <div className="instruction-graphic">
          <img src={instructionGraphic2} alt="" />
        </div>
        <FormattedMessage
          id="FAQ-2-CONTENT"
          values={{
            camera: () => (
              <span className="text-icon">
                <img src={cameraNoBackground} alt="" />
              </span>
            ),
          }}
        />
      </>
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
