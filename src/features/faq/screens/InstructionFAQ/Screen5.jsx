import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import { cameraNoBackground } from "../../../../assets";
import ScreenWrapper from "../ScreenWrapper";

const Screen = (props) => {
  const { isOpenDyslexicActive } = props;
  return (
    <ScreenWrapper
      title="FAQ-5-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <>
        {[
          "FAQ-5-CONTENT-1",
          "FAQ-5-CONTENT-2",
          "FAQ-5-CONTENT-3",
          "FAQ-5-CONTENT-4",
          "FAQ-5-CONTENT-5",
          "FAQ-5-CONTENT-6",
        ].map((id) => (
          <div key={id} className="text-align-left">
            <FormattedMessage
              id={id}
              values={{
                c: (chunks) => (
                  <span
                    className={clsx(
                      "subtitle",
                      isOpenDyslexicActive && "open-dyslexic"
                    )}
                  >
                    {chunks}
                  </span>
                ),
                br: () => <br />,
                camera: () => (
                  <span className="text-icon">
                    <img src={cameraNoBackground} alt="" />
                  </span>
                ),
              }}
            />
          </div>
        ))}
      </>
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
