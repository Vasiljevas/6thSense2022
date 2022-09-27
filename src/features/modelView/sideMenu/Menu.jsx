import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Button from "../../../components/Button";
import IconLink from "../../../components/IconLink";
import { facebook, instagram, linkedin } from "../../../assets";

const Menu = (props) => {
  const { isListActive, isSideMenuActive, setIsListActive } = props;
  const history = useHistory();

  return (
    <>
      <Button
        className={clsx("button", isListActive && "up")}
        text="BUTTON-3D-MODELS"
        onClick={() => setIsListActive(!isListActive)}
        tabIndex={isSideMenuActive ? "0" : "-1"}
      />
      <Button
        className={clsx("button", isListActive && "down")}
        text="BUTTON-INSTRUCTIONS"
        onClick={() =>
          history.push("/faq", {
            from: "model-view",
            previous: history.location.pathname,
          })
        }
        tabIndex={isSideMenuActive ? "0" : "-1"}
      />
      <Button
        className={clsx("button", isListActive && "down")}
        text="BUTTON-IGEM-INFO"
        onClick={() =>
          history.push("/whatsigem", {
            from: "model-view",
            previous: history.location.pathname,
          })
        }
        tabIndex={isSideMenuActive ? "0" : "-1"}
      />
      <Button
        className={clsx("button", isListActive && "down")}
        text="BUTTON-6SYNBIO-INFO"
        onClick={() =>
          history.push("/whats6thsense", {
            from: "model-view",
            previous: history.location.pathname,
          })
        }
        tabIndex={isSideMenuActive ? "0" : "-1"}
      />
      <div className={clsx("icon-group", isListActive && "down")}>
        <IconLink
          to="https://www.facebook.com/VilniusiGEM"
          src={facebook}
          alt=""
        />
        <IconLink
          to="https://www.instagram.com/igem_vilnius/"
          src={instagram}
          alt=""
        />
        <IconLink
          to="https://www.linkedin.com/company/vilnius-igem/"
          src={linkedin}
          alt=""
        />
      </div>
    </>
  );
};

export default Menu;

Menu.propTypes = {
  isListActive: PropTypes.bool.isRequired,
  isSideMenuActive: PropTypes.bool.isRequired,
  setIsListActive: PropTypes.func.isRequired,
};
