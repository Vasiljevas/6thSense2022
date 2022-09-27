import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { orangeCloseButton } from "../../../assets";
import CloseButton from "../../../components/CloseButton";

const ScreenWrapper = (props) => {
  const { children, title, isOpenDyslexicActive, setcurrentscreen } = props;
  const history = useHistory();

  return (
    <div className="modal">
      <CloseButton
        onClick={() => {
          if (
            history.location.state !== undefined &&
            history.location.state.from === "model-view"
          ) {
            history.push(history.location.state.previous, { from: "faq" });
          } else {
            history.push("/", { from: "faq" });
          }
        }}
        icon={orangeCloseButton}
      />
      <div className="modal-title">
        <FormattedMessage
          id={title}
          values={{
            c: (chunks) => <span className="color">{chunks}</span>,
          }}
        />
      </div>
      <div
        className={clsx(
          "modal-content",
          isOpenDyslexicActive && "open-dyslexic"
        )}
      >
        {React.cloneElement(children, {
          setcurrentscreen,
        })}
      </div>
    </div>
  );
};

export default ScreenWrapper;

ScreenWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
  setcurrentscreen: PropTypes.func,
};

ScreenWrapper.defaultProps = {
  setcurrentscreen: () => {},
};
