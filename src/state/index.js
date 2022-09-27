import actions from "../enums/actions.json";
import locales from "../enums/locales.json";
import googleAnalyticsEnable from "../services/googleAnalytics";

const getQueryVariable = (variable) => {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return undefined;
};

if (getQueryVariable("lang") !== undefined) {
  if (getQueryVariable("lang") === locales.LT) {
    localStorage.setItem("lang", locales.LT);
  } else if (getQueryVariable("lang") === locales.EN) {
    localStorage.setItem("lang", locales.EN);
  }
}

if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", locales.LT);
}

if (localStorage.getItem("open-dyslexic") === null) {
  localStorage.setItem("open-dyslexic", false);
}

if (localStorage.getItem("cookie-consent") === null) {
  localStorage.setItem("cookie-consent", true);
}

if (localStorage.getItem("google-analytics") === null) {
  localStorage.setItem("google-analytics", false);
}

if (localStorage.getItem("google-analytics") === "true") {
  googleAnalyticsEnable();
}

const setIsOpenDyslexicActive = (payload) => ({
  type: actions.SET_IS_OPEN_DYSLEXIC_ENABLED,
  payload,
});

const setLocale = (payload) => ({
  type: actions.SET_LOCALE,
  payload,
});

const disableShowInstructionModal = () => ({
  type: actions.DISABLE_SHOW_INSTRUCTION_MODAL,
});

const setIsArActive = (payload) => ({
  type: actions.SET_IS_AR_ACTIVE,
  payload,
});

const setShowCookieConsent = (payload) => ({
  type: actions.SET_SHOW_COOKIE_CONSENT,
  payload,
});

const setGoogleAnalytics = (payload) => ({
  type: actions.SET_GOOGLE_ANALYTICS,
  payload,
});

const initialState = {
  isOpenDyslexicActive: localStorage.getItem("open-dyslexic") === "true",
  locale: localStorage.getItem("lang"),
  showInstructionModal: localStorage.getItem("show-instruction-modal") === null,
  isArActive: true,
  showCookieConsent: localStorage.getItem("cookie-consent") === "true",
  isGoogleAnalyticsActive: localStorage.getItem("google-analytics") !== "false",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_IS_OPEN_DYSLEXIC_ENABLED:
      localStorage.setItem("open-dyslexic", action.payload);
      return {
        ...state,
        isOpenDyslexicActive: action.payload,
      };
    case actions.SET_LOCALE:
      localStorage.setItem(
        "lang",
        action.payload === locales.LT ? locales.LT : locales.EN
      );
      return {
        ...state,
        locale: action.payload,
      };
    case actions.DISABLE_SHOW_INSTRUCTION_MODAL:
      localStorage.setItem("show-instruction-modal", false);
      return {
        ...state,
        showInstructionModal: false,
      };
    case actions.SET_IS_AR_ACTIVE:
      return {
        ...state,
        isArActive: action.payload,
      };
    case actions.SET_SHOW_COOKIE_CONSENT:
      localStorage.setItem("cookie-consent", action.payload);
      return {
        ...state,
        showCookieConsent: action.payload,
      };
    case actions.SET_GOOGLE_ANALYTICS:
      if (state.isGoogleAnalyticsActive === false && action.payload === true) {
        googleAnalyticsEnable();
      }
      localStorage.setItem("google-analytics", action.payload);
      return {
        ...state,
        isGoogleAnalyticsActive: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
export {
  setIsOpenDyslexicActive,
  setLocale,
  disableShowInstructionModal,
  setIsArActive,
  setShowCookieConsent,
  setGoogleAnalytics,
};
