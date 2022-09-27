import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";
import Button from "../../../components/Button";
import { modelList } from "../../../data";

import "./stylesDesktop.css";
import "./stylesMobile.css";

const ModelList = (props) => {
  const { isOpenDyslexicActive } = props;
  const history = useHistory();

  return (
    <div className="model-list-wrapper">
      <div className="model-list-title">
        <FormattedMessage
          id="MAIN-MENU-MODEL-LIST-TITLE"
          values={{
            br: () => <br />,
            c: (chunks) => <span className="color">{chunks}</span>,
          }}
        />
      </div>
      <div className="model-list">
        {modelList.list.map((model) => (
          <Button
            key={model.name}
            className={clsx(
              "list-button",
              isOpenDyslexicActive && "open-dyslexic"
            )}
            onClick={() => history.push(model.path)}
            text={model.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelList;

ModelList.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
