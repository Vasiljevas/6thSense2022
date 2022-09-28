import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";
import MainMenu from "./mainMenu";
import ModelView from "./modelView";
import CookieConsent from "./cookieConsent";
import {
  InstructionFAQ,
  WhatsIgem,
  Whats6thSense,
  PrivacyPolicy,
  ForSchools,
} from "./faq";
import locales from "../enums/locales.json";
import { ltTranslation, enTranslation } from "../locales";
import RouteTracker from "../services/routeTracker";

import "./styles.css";

const App = ({ locale, showCookieConsent, isGoogleAnalyticsActive }) => (
  <IntlProvider
    locale={locale}
    messages={locale === locales.LT ? ltTranslation : enTranslation}
    defaultLocale={locales.LT}
  >
    <Router basename="/">
      {showCookieConsent && <Route path="/" component={CookieConsent} />}
      <Switch>
        <Route path="/" component={MainMenu} exact />
        <Route path="/faq" component={InstructionFAQ} exact />
        <Route path="/whatsigem" component={WhatsIgem} exact />
        <Route path="/whats6thsense" component={Whats6thSense} exact />
        <Route path="/privacypolicy" component={PrivacyPolicy} exact />
        <Route path="/forschools" component={ForSchools} exact />
        <Route
          path="/models/:modelid"
          render={(propsToSpread) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ModelView {...propsToSpread} key={Date.now()} />
          )}
          exact
        />
        <Route
          path="/ar.html"
          render={(propsToSpread) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <ModelView {...propsToSpread} key={Date.now()} />
          )}
          exact
        />
      </Switch>
      {isGoogleAnalyticsActive && <RouteTracker />}
    </Router>
  </IntlProvider>
);

const mapStateToProps = ({
  locale,
  showCookieConsent,
  isGoogleAnalyticsActive,
}) => ({
  locale,
  showCookieConsent,
  isGoogleAnalyticsActive,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  locale: PropTypes.string.isRequired,
  showCookieConsent: PropTypes.bool.isRequired,
  isGoogleAnalyticsActive: PropTypes.bool.isRequired,
};
