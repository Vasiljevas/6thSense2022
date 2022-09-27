import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import CloseButton from "../../../components/CloseButton";
import IconButton from "../../../components/IconButton";
import { close, backArrow } from "../../../assets";

import "./styles.css";

const ModalWrapper = (props) => {
  const {
    children,
    onToggleModal,
    title,
    onClickBackButton,
    backButtonHidden,
    isOpenDyslexicActive,
    large,
  } = props;

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className={clsx("modal", large && "large")}
      onClick={(e) => e.stopPropagation()}
    >
      <CloseButton onClick={onToggleModal} icon={close} />
      <IconButton
        src={backArrow}
        onClick={onClickBackButton}
        hidden={backButtonHidden}
      />
      <div
        className={clsx(
          "modal-content",
          isOpenDyslexicActive && "open-dyslexic"
        )}
      >
        <div
          className={clsx(
            "modal-title",
            isOpenDyslexicActive && "open-dyslexic"
          )}
        >
          {title && (
            <FormattedMessage
              values={{ i: (chunks) => <i>{chunks}</i> }}
              id={title}
            />
          )}
        </div>
        <div
          className={clsx(
            "modal-text",
            isOpenDyslexicActive && "open-dyslexic"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;

ModalWrapper.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClickBackButton: PropTypes.func,
  backButtonHidden: PropTypes.bool,
  large: PropTypes.bool,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};

ModalWrapper.defaultProps = {
  onClickBackButton: () => {},
  backButtonHidden: true,
  title: "",
  large: false,
};
