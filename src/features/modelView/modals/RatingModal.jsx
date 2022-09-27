import React from "react";
import PropTypes from "prop-types";
import ModalWrapper from "./ModalWrapper";
import Rate from "../../rating/Rate";

const ModelViewRatingModal = (props) => {
  const { onToggleModal, isOpenDyslexicActive } = props;

  return (
    <ModalWrapper
      onToggleModal={onToggleModal}
      title="MODAL-RATING-TITLE"
      isOpenDyslexicActive={isOpenDyslexicActive}
    >
      <Rate onToggleModal={onToggleModal} />
    </ModalWrapper>
  );
};

export default ModelViewRatingModal;

ModelViewRatingModal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
