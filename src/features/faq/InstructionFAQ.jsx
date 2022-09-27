import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import clsx from "clsx";
import PaginationHandler from "./PaginationHandler";
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from "./screens";

import "./styles.css";

const Container = ({ isOpenDyslexicActive }) => (
  <div className={clsx("faq", isOpenDyslexicActive && "open-dyslexic")}>
    <PaginationHandler>
      <Screen1 isOpenDyslexicActive={isOpenDyslexicActive} />
      <Screen2 isOpenDyslexicActive={isOpenDyslexicActive} />
      <Screen3 isOpenDyslexicActive={isOpenDyslexicActive} />
      <Screen4 isOpenDyslexicActive={isOpenDyslexicActive} />
      <Screen5 isOpenDyslexicActive={isOpenDyslexicActive} />
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
