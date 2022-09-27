import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import {
  instructionGraphic1,
  instructionGraphic2,
  cameraNoBackground,
} from "../../../assets";
import ModalWrapper from "./ModalWrapper";

const ModelViewInstructionModal = (props) => {
  const { onToggleModal, isOpenDyslexicActive } = props;
  return (
    <ModalWrapper
      onToggleModal={onToggleModal}
      title="INSTRUCTIONS-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
      large
    >
      <div>
        <p>
          <FormattedMessage
            id="INSTRUCTIONS-TEXT-1"
            defaultMessage="Grant the browser permission to use your devices camera."
          />
          <br />
          <FormattedMessage
            id="INSTRUCTIONS-TEXT-2"
            defaultMessage="Scan the black and white marker."
          />
        </p>
        <div className="instruction-graphic">
          <img src={instructionGraphic1} alt="" />
        </div>
        <p className="title">
          <FormattedMessage id="INSTRUCTIONS-TEXT-3" defaultMessage="OR" />
        </p>
        <div>
          <FormattedMessage
            id="INSTRUCTIONS-TEXT-4"
            defaultMessage="Click on the"
          />
          <span className="text-icon">
            <img src={cameraNoBackground} alt="" />
          </span>
          <FormattedMessage
            id="INSTRUCTIONS-TEXT-5"
            defaultMessage="icon and the 3D models will be displayed on your devices screen without using the camera."
          />
        </div>
        <div className="instruction-graphic">
          <img src={instructionGraphic2} alt="" />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModelViewInstructionModal;

ModelViewInstructionModal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
