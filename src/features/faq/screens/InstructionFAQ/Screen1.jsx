import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { instructionGraphic4, instructionGraphic5 } from "../../../../assets";
import ScreenWrapper from "../ScreenWrapper";

const Screen = (props) => {
  const { isOpenDyslexicActive, setcurrentscreen } = props;

  return (
    <ScreenWrapper
      title="FAQ-1-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <>
        <div className="instruction-graphic-square">
          <img src={instructionGraphic4} alt="" />
        </div>
        <div>
          <FormattedMessage
            id="FAQ-1-CONTENT-1"
            values={{
              c: (chunks) => (
                <span
                  className="color clickable"
                  onClick={() => setcurrentscreen(1)}
                  onKeyPress={() => setcurrentscreen(1)}
                  role="button"
                  tabIndex="0"
                >
                  {chunks}
                </span>
              ),
            }}
          />
        </div>
        <div className="instruction-graphic-square">
          <img src={instructionGraphic5} alt="" />
        </div>
        <div>
          <FormattedMessage
            id="FAQ-1-CONTENT-2"
            values={{
              c: (chunks) => <span className="color">{chunks}</span>,
            }}
          />
        </div>
      </>
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
  setcurrentscreen: PropTypes.func.isRequired,
};
