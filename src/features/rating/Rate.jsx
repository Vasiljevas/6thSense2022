import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import firebase from "firebase";
import IconStar from "../../components/IconStar";

import "./styles.css";

const Rate = ({ onToggleModal }) => {
  const db = firebase.firestore();
  const [starsSelected, setStarsSelected] = React.useState(0);

  const addValue = (stars) => {
    db.collection("feedback").add({
      stars,
      url: window.location.href,
      created_at: new Date(),
    });
  };

  const selectStars = (stars) => {
    setStarsSelected(stars);
  };

  return (
    <div className="rate-wrapper">
      <div className="stars">
        {[...Array(5)].map((n, i) => (
          <button
            type="button"
            className="btn btn-star"
            onClick={() => selectStars(i + 1)}
            key={n}
          >
            <IconStar isFilled={i < starsSelected} />
          </button>
        ))}
      </div>
      <div
        type="button"
        onClick={() => {
          addValue(starsSelected);
          onToggleModal();
        }}
        onKeyPress={() => {
          addValue(starsSelected);
          onToggleModal();
        }}
        role="button"
        className="submit-button"
        tabIndex="0"
      >
        <FormattedMessage id="BUTTON-LEAVE-FEEDBACK" />
      </div>
    </div>
  );
};

export default Rate;

Rate.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
};
