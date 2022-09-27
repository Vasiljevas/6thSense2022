import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import { mainMenuImage } from "../../../assets";

import "./stylesDesktop.css";
import "./stylesMobile.css";

const Welcome = (props) => {
  const { isOpenDyslexicActive } = props;

  return (
    <div className="welcome">
      <img className="image" src={mainMenuImage} alt="" />
      <div className="welcome-text">
        <div className="header">
          <FormattedMessage
            id="MAIN-MENU-HEADER"
            values={{
              br: () => <br />,
              c: (chunks) => <span className="color">{chunks}</span>,
              s: (chunks) => <span className="small">{chunks}</span>,
            }}
          />
        </div>
        <div
          className={clsx(isOpenDyslexicActive && "open-dyslexic", "subheader")}
        >
          <FormattedMessage
            id="MAIN-MENU-SUBHEADER"
            values={{
              br: () => <br />,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

Welcome.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
