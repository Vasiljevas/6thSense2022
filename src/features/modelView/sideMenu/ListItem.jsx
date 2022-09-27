import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { sideMenuListImage } from "../../../assets";

const ListItem = (props) => {
  const { to, text, tabIndex, isOpenDyslexicActive } = props;
  const history = useHistory();

  return (
    <li>
      <div className="bulletpoint">
        <img src={sideMenuListImage} alt="" />
      </div>
      <div
        className={clsx("link", isOpenDyslexicActive && "open-dyslexic")}
        onClick={() => history.push(to)}
        onKeyPress={() => history.push(to)}
        role="button"
        tabIndex={tabIndex}
      >
        <FormattedMessage id={text} />
      </div>
    </li>
  );
};

export default ListItem;

ListItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};

ListItem.defaultProps = {
  tabIndex: "0",
};
