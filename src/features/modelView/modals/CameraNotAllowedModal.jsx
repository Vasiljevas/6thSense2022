import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { instructionGraphic3 } from "../../../assets";
import ModalWrapper from "./ModalWrapper";

const CameraNotAllowedModal = (props) => {
  const { onToggleModal, isOpenDyslexicActive } = props;
  return (
    <ModalWrapper
      onToggleModal={onToggleModal}
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <div>
        <p>
          <FormattedMessage id="CAMERA-NOT-ALLOWED" />
        </p>
        <div className="instruction-graphic">
          <img src={instructionGraphic3} alt="" />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CameraNotAllowedModal;

CameraNotAllowedModal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
