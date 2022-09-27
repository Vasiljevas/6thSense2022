import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ScreenWrapper from "./ScreenWrapper";

const Screen = (props) => {
  const { isOpenDyslexicActive } = props;
  return (
    <ScreenWrapper
      title="WHATSIGEM-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <FormattedMessage
        id="WHATSIGEM-CONTENT"
        values={{
          br: () => <br />,
          c: (chunks) => <a href="https://vilniusigem.lt/">{chunks}</a>,
        }}
      />
    </ScreenWrapper>
  );
};

export default Screen;

Screen.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
