import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import ScreenWrapper from "./ScreenWrapper";

const Screen = (props) => {
  const { isOpenDyslexicActive } = props;
  const history = useHistory();
  return (
    <ScreenWrapper
      title="PRIVACY-POLICY-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <FormattedMessage
        id="PRIVACY-POLICY-CONTENT"
        values={{
          br: () => <br />,
          i: (chunks) => <i>{chunks}</i>,
          a1: (chunks) => (
            <span
              className="color clickable"
              onClick={() => history.push("/")}
              onKeyPress={() => history.push("/")}
              role="button"
              tabIndex="0"
            >
              {chunks}
            </span>
          ),
          a2: (chunks) => (
            <a
              href="https://policies.google.com/privacy?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              {chunks}
            </a>
          ),
          a3: (chunks) => (
            <a
              href="https://www.allaboutcookies.org/cookies/"
              target="_blank"
              rel="noreferrer"
            >
              {chunks}
            </a>
          ),
          a4: (chunks) => <a href="mailto:it@vilniusigem.lt">{chunks}</a>,
          c: (chunks) => <span className="color">{chunks}</span>,
        }}
      />
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
