/* globals THREE, THREEx */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { cameraPara } from "../../../assets";
import LoadingScreen from "../LoadingScreen";

const {
  Scene,
  DirectionalLight,
  PerspectiveCamera,
  WebGLRenderer,
  sRGBEncoding,
  Group,
  GLTFLoader,
  DRACOLoader,
  Clock,
  AnimationMixer,
  LoopOnce,
  Color,
} = THREE;

const {
  ArToolkitSource,
  ArToolkitContext,
  ArSmoothedControls,
  ArMarkerControls,
} = THREEx;

class ModelViewerAR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };

    this.scene = new Scene();
    this.root = new Group();
    this.camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.controls = new ArSmoothedControls(this.root, {
      lerpPosition: 0.8,
      lerpQuaternion: 0.8,
      lerpScale: 1,
    });
    this.clock = new Clock();
    this.arToolkitSource = new ArToolkitSource({
      sourceType: "webcam",
    });
    this.arToolkitContext = new ArToolkitContext({
      cameraParametersUrl: cameraPara,
      detectionMode: "mono",
      imageSmoothingEnabled: true,
    });
    this.markerControls = new ArMarkerControls(
      this.arToolkitContext,
      this.root,
      {
        type: "pattern",
        patternUrl: props.model.pattern,
      }
    );
    this.threejsActive = true;
  }

  componentDidMount() {
    const { model, path } = this.props;

    this.container = document.getElementById("model-view");

    const light0 = new DirectionalLight(0xcccccc, 1);
    light0.position.set(0, 3, 0);
    this.scene.add(light0);

    const light1 = new DirectionalLight(0xffffff, 1);
    light1.position.set(1, 1, 1);
    this.scene.add(light1);

    const light2 = new DirectionalLight(0xffffff, 1);
    light2.position.set(-1, 1, -1);
    this.scene.add(light2);

    const light3 = new DirectionalLight(0xffffff, 1);
    light3.position.set(0, -1, 2);
    this.scene.add(light3);

    this.scene.add(this.camera);

    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;

    this.renderer.setClearColor(new Color("lightgrey"), 0);
    this.renderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight
    );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputEncoding = sRGBEncoding;
    this.mount.appendChild(this.renderer.domElement);

    // eslint-disable-next-line prefer-arrow-callback
    this.arToolkitSource.init(() => {
      this.onResize();
    });

    // eslint-disable-next-line prefer-arrow-callback
    this.arToolkitContext.init(() => {
      this.camera.projectionMatrix.copy(
        this.arToolkitContext.getProjectionMatrix()
      );
    });

    window.addEventListener("resize", this.onResize);

    this.scene.add(this.root);

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader);

    let mixer;
    const actions = [];

    const animate = () => {
      if (this.threejsActive) {
        mixer.update(this.clock.getDelta());
        this.controls.update(this.root);
        actions.forEach((action) => {
          action.play();
        });
        this.arToolkitContext.update(this.arToolkitSource.domElement);
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(animate);
      }
    };

    loader.load(path, (loadedModel) => {
      const meshItem = loadedModel.scene;

      meshItem.scale.set(
        model.scale * 0.25,
        model.scale * 0.25,
        model.scale * 0.25
      );
      meshItem.position.x += model.pos.x;
      meshItem.position.y += model.pos.y;
      meshItem.position.z += model.pos.z;
      meshItem.rotation.x += model.rotAR.x;
      meshItem.rotation.y += model.rotAR.y;
      meshItem.rotation.z += model.rotAR.z;

      mixer = new AnimationMixer(meshItem);
      loadedModel.animations.forEach((animation) => {
        const action = mixer.clipAction(animation);
        if (model.looponce) {
          action.setLoop(LoopOnce);
          action.clampWhenFinished = true;
        }
        actions.push(action);
      });

      this.root.add(meshItem);

      this.setState({ loading: false });

      animate();
    });
  }

  componentWillUnmount() {
    this.threejsActive = false;
    this.root.parent.dispose();
    this.disposeRecursive(this.root);
    this.scene.dispose();
    this.mount.removeChild(this.renderer.domElement);
    this.renderer.dispose();
    this.scene = undefined;
    this.root = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.controls = undefined;
    this.clock = undefined;
    this.arToolkitSource = undefined;
    this.arToolkitContext = undefined;
    this.markerControls = undefined;
    if (document.getElementById("arjs-video") !== null) {
      document.getElementById("arjs-video").remove();
    }
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("camera-error", this.handleCameraError);
  }

  disposeRecursive = (thing) => {
    if (thing.children !== undefined) {
      thing.children.forEach((child) => {
        this.disposeRecursive(child);
      });
    }
    if (thing.geometry !== undefined) thing.geometry.dispose();
    if (thing.material !== undefined) thing.material.dispose();
  };

  onResize = () => {
    this.arToolkitSource.onResizeElement();
    this.arToolkitSource.copyElementSizeTo(this.renderer.domElement);
    if (this.arToolkitContext.arController !== null) {
      this.arToolkitSource.copyElementSizeTo(
        this.arToolkitContext.arController.canvas
      );
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <div id="model-view">
        {loading ? <LoadingScreen text="LOADING-MODEL" /> : <></>}
        {/* eslint-disable-next-line no-return-assign */}
        <div ref={(ref) => (this.mount = ref)} />
      </div>
    );
  }
}

export default ModelViewerAR;

ModelViewerAR.propTypes = {
  model: PropTypes.shape({
    pattern: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
    pos: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    rotAR: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    looponce: PropTypes.bool,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
