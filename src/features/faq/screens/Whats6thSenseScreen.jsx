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
      title="WHATS6THSENSE-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <FormattedMessage
        id="WHATS6THSENSE-CONTENT"
        values={{
          br: () => <br />,
          c: (chunks) => (
            <span
              className="color clickable"
              onClick={() => history.push("/faq")}
              onKeyPress={() => history.push("/faq")}
              role="button"
              tabIndex="0"
            >
              {chunks}
            </span>
          ),
        }}
      />
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
