import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { IntlProviderWrapper, IntlContext } from "./IntlContext";

const HelloWorld = () => (
  <IntlProviderWrapper>
    <IntlContext.Consumer>
      {({ switchToEn, switchToLt }) => (
        <div>
          <FormattedMessage
            id="HELLOWORLD"
            defaultMessage="Sveikas, pasauli!"
          />
          <button type="button" onClick={switchToEn}>
            English
          </button>
          <button type="button" onClick={switchToLt}>
            Lithuanian
          </button>
          <div>
            Models:
            <Link to="/models/dna">DNA</Link>
          </div>
        </div>
      )}
    </IntlContext.Consumer>
  </IntlProviderWrapper>
);

export default HelloWorld;
