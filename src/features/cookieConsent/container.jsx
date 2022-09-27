import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import CloseButton from "../../components/CloseButton";
import { close } from "../../assets";
import * as actions from "../../state";

import "./stylesDesktop.css";
import "./stylesMobile.css";

const Container = ({ setShowCookieConsent, setGoogleAnalytics }) => {
  const [analyticsChecked, setAnalyticsChecked] = useState(true);

  const history = useHistory();

  return (
    <div className="cookieconsent">
      <div className="text">
        <FormattedMessage
          id="COOKIE-TEXT"
          values={{
            a: (chunks) => (
              <span
                className="color clickable"
                onClick={() => {
                  history.push("/privacypolicy");
                }}
                onKeyPress={() => {
                  history.push("/privacypolicy");
                }}
                role="button"
                tabIndex="0"
              >
                {chunks}
              </span>
            ),
          }}
        />
      </div>
      <div className="flex checkboxes">
        <div className="checkbox-group">
          <CheckBox onClick={() => {}} checked />
          <FormattedMessage id="COOKIE-REQUIRED" />
        </div>
        <div
          className="checkbox-group clickable"
          onClick={() => {
            setAnalyticsChecked(!analyticsChecked);
          }}
          onKeyPress={() => {
            setAnalyticsChecked(!analyticsChecked);
          }}
          role="button"
          tabIndex="0"
        >
          <CheckBox onClick={() => {}} checked={analyticsChecked} />
          <FormattedMessage id="COOKIE-ANALYTICAL" />
        </div>
      </div>
      <div className="flex">
        <Button
          className="button"
          onClick={() => {
            setShowCookieConsent(false);
            setGoogleAnalytics(analyticsChecked);
          }}
          text="ALLOW"
        />
        <CloseButton
          onClick={() => {
            setShowCookieConsent(false);
            setGoogleAnalytics(false);
          }}
          icon={close}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setShowCookieConsent: (payload) =>
    dispatch(actions.setShowCookieConsent(payload)),
  setGoogleAnalytics: (payload) =>
    dispatch(actions.setGoogleAnalytics(payload)),
});

export default connect(null, mapDispatchToProps)(Container);

Container.propTypes = {
  setShowCookieConsent: PropTypes.func.isRequired,
  setGoogleAnalytics: PropTypes.func.isRequired,
};
