import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import ModalWrapper from "./ModalWrapper";
import locales from "../../../enums/locales.json";
import { easyToRead } from "../../../assets";

const ModelViewInfoModal = (props) => {
  const { onToggleModal, info, isOpenDyslexicActive, locale } = props;
  const { name, desc, extra, descSimplified } = info;

  const [whichDescriptionActive, changeWhichDescriptionActive] = useState("0");
  // eslint-disable-next-line prettier/prettier, no-unused-vars
  const [isSimplifiedDescActive, changeIsSimplifiedDescActive] = useState(false);

  return (
    <ModalWrapper
      onToggleModal={onToggleModal}
      title={
        whichDescriptionActive === "0"
          ? name
          : extra[whichDescriptionActive].name
      }
      backButtonHidden={
        whichDescriptionActive === "0" && !isSimplifiedDescActive
      }
      onClickBackButton={() => {
        changeWhichDescriptionActive("0");
        changeIsSimplifiedDescActive(false);
      }}
      isOpenDyslexicActive={isOpenDyslexicActive}
      large
    >
      <div className="info-modal-content">
        <div
          className={clsx(
            (locales.LT !== locale ||
              descSimplified === undefined ||
              whichDescriptionActive !== "0") &&
              "hidden"
          )}
        >
          <FormattedMessage
            id={
              // eslint-disable-next-line no-nested-ternary
              whichDescriptionActive === "0"
                ? isSimplifiedDescActive
                  ? descSimplified
                  : desc
                : extra[whichDescriptionActive].desc
            }
            values={Object.keys(extra).reduce(
              (result, key) => {
                // eslint-disable-next-line no-param-reassign
                result[key] = (chunks) => (
                  <b>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        changeWhichDescriptionActive(key);
                      }}
                      onKeyPress={(e) => {
                        e.stopPropagation();
                        changeWhichDescriptionActive(key);
                      }}
                      role="button"
                      tabIndex={whichDescriptionActive === "0" ? "0" : "-1"}
                    >
                      {chunks}
                    </span>
                  </b>
                );
                return result;
              },
              {
                br: () => <br />,
                i: (chunks) => <i>{chunks}</i>,
                a: (chunks) => <a href={chunks}>{chunks}</a>,
                // eslint-disable-next-line jsx-a11y/alt-text
                img: (chunks) => <img src={chunks} />,
              }
            )}
          />
        </div>
        <div
          className={clsx(
            (locales.LT !== locale ||
              descSimplified === undefined ||
              whichDescriptionActive !== "0" ||
              isSimplifiedDescActive) &&
              "hidden",
            "easy-to-read-info-button"
          )}
          onClick={() => changeIsSimplifiedDescActive(!isSimplifiedDescActive)}
          onKeyPress={() =>
            changeIsSimplifiedDescActive(!isSimplifiedDescActive)
          }
          role="button"
          tabIndex="0"
        >
          <img alt="" src={easyToRead} />
          <div>
            <FormattedMessage id="EASY-TO-READ-INFO" />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ModelViewInfoModal;

ModelViewInfoModal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    extra: PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
      })
    ).isRequired,
    descSimplified: PropTypes.string,
  }).isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
};
