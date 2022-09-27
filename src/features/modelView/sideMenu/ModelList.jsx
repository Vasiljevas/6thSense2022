import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import ListItem from "./ListItem";
import { modelList } from "../../../data";

const ModelList = (props) => {
  const { isListActive, isSideMenuActive, isOpenDyslexicActive } = props;

  return (
    <div className={clsx("list", isListActive && "active")}>
      <ul>
        {modelList.list.map((model) => (
          <ListItem
            key={model.name}
            to={model.path}
            text={model.name}
            tabIndex={isListActive && isSideMenuActive ? "0" : "-1"}
            isOpenDyslexicActive={isOpenDyslexicActive}
          />
        ))}
      </ul>
    </div>
  );
};

export default ModelList;

ModelList.propTypes = {
  isListActive: PropTypes.bool.isRequired,
  isSideMenuActive: PropTypes.bool.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
