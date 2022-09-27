import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ModalWrapper from "./ModalWrapper";

const CameraNotAvailableModal = (props) => {
  const { onToggleModal, isOpenDyslexicActive } = props;
  return (
    <ModalWrapper
      onToggleModal={onToggleModal}
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <p>
        <FormattedMessage id="CAMERA-NOT-AVAILABLE" />
      </p>
    </ModalWrapper>
  );
};

export default CameraNotAvailableModal;

CameraNotAvailableModal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
