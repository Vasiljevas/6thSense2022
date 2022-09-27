import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import clsx from "clsx";
import PaginationHandler from "./PaginationHandler";
import { PrivacyPolicyScreen } from "./screens";

import "./styles.css";

const Container = ({ isOpenDyslexicActive }) => (
  <div className={clsx("faq", isOpenDyslexicActive && "open-dyslexic")}>
    <PaginationHandler>
      <PrivacyPolicyScreen isOpenDyslexicActive={isOpenDyslexicActive} />
    </PaginationHandler>
  </div>
);

const mapStateToProps = ({ isOpenDyslexicActive }) => ({
  isOpenDyslexicActive,
});

export default connect(mapStateToProps)(Container);

Container.propTypes = {
  isOpenDyslexicActive: PropTypes.bool.isRequired,
};
