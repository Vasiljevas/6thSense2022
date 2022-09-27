import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { rightArrow, leftArrow } from "../../assets";

const ScreenWrapper = (props) => {
  const { children } = props;
  const [currentScreen, setcurrentscreen] = useState(0);

  return (
    <div className="pagination">
      <div
        className={clsx(
          "left-arrow",
          (!Array.isArray(children) || currentScreen === 0) && "hidden"
        )}
        tabIndex="0"
        role="button"
        onClick={() => setcurrentscreen(currentScreen - 1)}
        onKeyPress={() => setcurrentscreen(currentScreen - 1)}
      >
        <img src={leftArrow} alt="<" />
      </div>
      <div className="pagination-content">
        {Array.isArray(children)
          ? React.cloneElement(children[currentScreen], {
              setcurrentscreen,
            })
          : React.cloneElement(children, {
              setcurrentscreen,
            })}
        {}
      </div>
      <div
        className={clsx(
          "right-arrow",
          (!Array.isArray(children) || currentScreen === children.length - 1) &&
            "hidden"
        )}
        tabIndex="0"
        role="button"
        onClick={() => setcurrentscreen(currentScreen + 1)}
        onKeyPress={() => setcurrentscreen(currentScreen + 1)}
      >
        <img src={rightArrow} alt=">" />
      </div>
    </div>
  );
};

export default ScreenWrapper;

ScreenWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
