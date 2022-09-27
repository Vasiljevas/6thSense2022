import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import IconLink from "../../../components/IconLink";
import { facebook, instagram, linkedin, sideMenuLogo } from "../../../assets";
import locales from "../../../enums/locales.json";

import "./stylesMobile.css";
import "./stylesDesktop.css";

const BottomMenu = (props) => {
  const { isOpenDyslexicActive, locale } = props;
  const history = useHistory();

  return (
    <div className="bottom-menu-wrapper">
      <div className="bottom-menu">
        <div className="logo">
          <img src={sideMenuLogo} alt="" />
        </div>
        <Button
          className={clsx("button", isOpenDyslexicActive && "open-dyslexic")}
          text="BUTTON-INSTRUCTIONS"
          onClick={() => history.push("/faq")}
        />
        <Button
          className={clsx("button", isOpenDyslexicActive && "open-dyslexic")}
          text="BUTTON-6SYNBIO-INFO"
          onClick={() => history.push("/whats6thsense")}
        />
        <Button
          className={clsx("button", isOpenDyslexicActive && "open-dyslexic")}
          text="BUTTON-IGEM-INFO"
          onClick={() => history.push("/whatsigem")}
        />
        <ButtonLink
          className={clsx("button", isOpenDyslexicActive && "open-dyslexic")}
          text="BUTTON-PRINT-MARKERS"
          to={
            locale === locales.LT
              ? "../assets/markeriai_lt.zip"
              : "../assets/markers_en.zip"
          }
        />
        {locale === locales.LT && (
          <Button
            className={clsx("button", isOpenDyslexicActive && "open-dyslexic")}
            text="FOR-SCHOOLS"
            onClick={() => history.push("/forschools")}
          />
        )}
        <Button
          className={clsx("button", isOpenDyslexicActive && "open-dyslexic")}
          text="PRIVACY-POLICY-TITLE"
          onClick={() => history.push("/privacypolicy")}
        />
        <div className="icon-group">
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
      </div>
    </div>
  );
};

export default BottomMenu;

BottomMenu.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
};
