import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ViewerAR, ViewerNoAR } from "./viewers";
import {
  InfoModal,
  RatingModal,
  InstructionModal,
  CameraNotAllowedModal,
  CameraNotAvailableModal,
} from "./modals";
import {
  dna,
  synbio,
  antibiotic,
  translation,
  crispr,
  virus,
  rna,
  vaccines,
  bioit,
  gmo,
  biobrick,
  circuit,
  ecoli,
  gfp,
  nano,
  sequencing,
  oldGMO,
  transformation,
  gfpNew,
  transformationElectroporation,
} from "../../data";
import Footer from "./Footer/Footer";
import LoadingScreen from "./LoadingScreen";
import SideMenu from "./sideMenu";
import locales from "../../enums/locales.json";
import * as actions from "../../state";

import "./styles.css";

const metaMapping = {
  dna,
  synbio,
  antibiotic,
  translation,
  crispr,
  virus,
  rna,
  vaccines,
  bioit,
  gmo,
  transformation,
  gfpNew,
  transformationElectroporation,
};

const oldMetaMapping = {
  dna,
  synbio,
  antibiotic,
  translation,
  crisprcas9: crispr,
  virus,
  rna,
  vaccines,
  bioit,
  gmo: oldGMO,
  biobrick,
  circuit,
  ecoli,
  gfp,
  nano,
  sequencing,
  transformation,
  transformationElectroporation,
};

const getQueryVariable = (variable, string) => {
  const query = string.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return undefined;
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoModalOpen: false,
      isRatingModalOpen: false,
      isSoundPlaying: false,
      isLoading: true,
      isCameraNotAllowed: false,
      isSideMenuActive: false,
      isCameraNotAllowedModalOpen: false,
      isCameraNotAvailableModalOpen: false,
      meta: {},
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    const { modelid } = this.props.match.params;
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    const { pathname, search } = this.props.location;

    const meta =
      pathname === "/ar.html"
        ? oldMetaMapping[getQueryVariable("model", search)]
        : metaMapping[modelid];

    const { lt, en } = meta.info;
    this.setState({
      audioLT: new Audio(lt.audioRec),
      audioEN: new Audio(en.audioRec),
    });

    const { setIsArActive } = this.props;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(() => {
          this.setState({ isLoading: false, meta });
        })
        .catch(() => {
          this.setState({
            isLoading: false,
            isCameraNotAllowed: true,
            isCameraNotAllowedModalOpen: true,
            meta,
          });
          setIsArActive(false);
        });
    } else {
      this.setState({
        isLoading: false,
        isCameraNotAllowed: true,
        isCameraNotAvailableModalOpen: true,
        meta,
      });
      setIsArActive(false);
    }
  }

  componentWillUnmount() {
    const { audioLT, audioEN } = this.state;
    audioLT.pause();
    audioEN.pause();
  }

  onPlaySound = (locale) => {
    this.toggleIsRatingModalOpen(false);

    const { audioLT, audioEN } = this.state;
    audioLT.addEventListener("ended", this.onStopSound);
    audioEN.addEventListener("ended", this.onStopSound);
    switch (locale) {
      case locales.LT:
        audioLT.play();
        break;
      case locales.EN:
        audioEN.play();
        break;
      default:
        break;
    }
    this.setState({ isSoundPlaying: true });
  };

  onStopSound = () => {
    const { audioLT, audioEN, meta } = this.state;
    const { lt, en } = meta.info;
    audioLT.pause();
    audioEN.pause();

    this.toggleIsRatingModalOpen(true);

    this.setState({
      isSoundPlaying: false,
      audioLT: new Audio(lt.audioRec),
      audioEN: new Audio(en.audioRec),
    });
  };

  toggleIsRatingModalOpen = (flag) => {
    const { isRatingModalOpen } = this.state;
    const { disableShowInstructionModal } = this.props;

    this.setState({
      isRatingModalOpen: flag === undefined ? !isRatingModalOpen : flag,
      isCameraNotAllowedModalOpen: false,
      isCameraNotAvailableModalOpen: false,
      isInfoModalOpen: false,
    });

    disableShowInstructionModal();
  };

  toggleIsInfoModalOpen = (e) => {
    const { isInfoModalOpen } = this.state;
    const { disableShowInstructionModal } = this.props;

    this.setState({
      isInfoModalOpen: !isInfoModalOpen,
      isCameraNotAllowedModalOpen: false,
      isCameraNotAvailableModalOpen: false,
    });

    disableShowInstructionModal();

    if (!isInfoModalOpen) e.stopPropagation();
  };

  renderModelViewer = () => {
    const { isCameraNotAllowed, meta } = this.state;
    const { locale, isArActive } = this.props;

    if (locale === locales.LT) {
      if (isArActive && !isCameraNotAllowed) {
        return (
          <ViewerAR
            key={locales.LT}
            model={meta.model}
            path={meta.info.lt.path}
          />
        );
      }
      return (
        <ViewerNoAR
          key={locales.LT}
          model={meta.model}
          path={meta.info.lt.path}
        />
      );
    }
    if (isArActive && !isCameraNotAllowed) {
      return (
        <ViewerAR
          key={locales.EN}
          model={meta.model}
          path={meta.info.en.path}
        />
      );
    }
    return (
      <ViewerNoAR
        key={locales.EN}
        model={meta.model}
        path={meta.info.en.path}
      />
    );
  };

  clearModals = () => {
    const { disableShowInstructionModal } = this.props;
    this.setState({
      isInfoModalOpen: false,
      isCameraNotAllowedModalOpen: false,
      isCameraNotAvailableModalOpen: false,
      isRatingModalOpen: false,
    });
    disableShowInstructionModal();
  };

  render() {
    const {
      isSoundPlaying,
      isInfoModalOpen,
      isRatingModalOpen,
      isLoading,
      isCameraNotAllowed,
      isSideMenuActive,
      isCameraNotAllowedModalOpen,
      isCameraNotAvailableModalOpen,
      meta,
    } = this.state;
    const {
      locale,
      isArActive,
      setIsArActive,
      isOpenDyslexicActive,
      setLocale,
      showInstructionModal,
      disableShowInstructionModal,
    } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
      <div className="model-view" onClick={this.clearModals}>
        {isLoading ? (
          <LoadingScreen text="LOADING-CAMERA" />
        ) : (
          <>{this.renderModelViewer()}</>
        )}
        <Footer
          toggleIsInfoModalOpen={this.toggleIsInfoModalOpen}
          isSoundPlaying={isSoundPlaying}
          onPlaySound={this.onPlaySound}
          onStopSound={this.onStopSound}
          isArActive={isArActive}
          toggleIsArActive={() => setIsArActive(!isArActive)}
          isArDisabled={isCameraNotAllowed}
          switchToEn={() => {
            setLocale(locales.EN);
          }}
          switchToLt={() => {
            setLocale(locales.LT);
          }}
          locale={locale}
          isLoading={isLoading}
          toggleIsSideMenuActive={() =>
            this.setState({ isSideMenuActive: !isSideMenuActive })
          }
        />
        {isInfoModalOpen && (
          <InfoModal
            onToggleModal={this.toggleIsInfoModalOpen}
            info={meta.info}
            isOpenDyslexicActive={isOpenDyslexicActive}
            locale={locale}
          />
        )}
        {isRatingModalOpen && (
          <RatingModal
            onToggleModal={() => this.toggleIsRatingModalOpen(false)}
            isOpenDyslexicActive={isOpenDyslexicActive}
          />
        )}
        {showInstructionModal && (
          <InstructionModal
            onToggleModal={disableShowInstructionModal}
            isOpenDyslexicActive={isOpenDyslexicActive}
          />
        )}
        {!showInstructionModal && isCameraNotAllowedModalOpen && (
          <CameraNotAllowedModal
            onToggleModal={() =>
              this.setState({ isCameraNotAllowedModalOpen: false })
            }
            isOpenDyslexicActive={isOpenDyslexicActive}
          />
        )}
        {!showInstructionModal && isCameraNotAvailableModalOpen && (
          <CameraNotAvailableModal
            onToggleModal={() =>
              this.setState({ isCameraNotAvailableModalOpen: false })
            }
            isOpenDyslexicActive={isOpenDyslexicActive}
          />
        )}
        <SideMenu
          setIsSideMenuActive={() => this.setState({ isSideMenuActive: false })}
          isSideMenuActive={isSideMenuActive}
          isOpenDyslexicActive={isOpenDyslexicActive}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  locale,
  isOpenDyslexicActive,
  showInstructionModal,
  isArActive,
}) => ({
  locale,
  isOpenDyslexicActive,
  showInstructionModal,
  isArActive,
});

const mapDispatchToProps = (dispatch) => ({
  setLocale: (payload) => dispatch(actions.setLocale(payload)),
  disableShowInstructionModal: () =>
    dispatch(actions.disableShowInstructionModal()),
  setIsArActive: (payload) => dispatch(actions.setIsArActive(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);

Container.propTypes = {
  locale: PropTypes.string.isRequired,
  isOpenDyslexicActive: PropTypes.bool.isRequired,
  setLocale: PropTypes.func.isRequired,
  disableShowInstructionModal: PropTypes.func.isRequired,
  showInstructionModal: PropTypes.bool.isRequired,
  isArActive: PropTypes.bool.isRequired,
  setIsArActive: PropTypes.func.isRequired,
};
