/* globals THREE */

import React, { Component } from "react";
import PropTypes from "prop-types";
import LoadingScreen from "../LoadingScreen";

const {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  sRGBEncoding,
  OrbitControls,
  Group,
  GLTFLoader,
  DRACOLoader,
  Clock,
  AnimationMixer,
  LoopOnce,
} = THREE;

class ModelViewerNoAR extends Component {
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
      preserveDrawingBuffer: true,
      alpha: true,
    });
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.clock = new Clock();
    this.threejsActive = true;
  }

  componentDidMount() {
    const { model, path } = this.props;

    this.container = document.getElementById("model-view");

    const light1 = new THREE.DirectionalLight(0xffffff, 2.5);
    light1.position.set(0, 1, 3);
    this.scene.add(light1);

    const light2 = new THREE.AmbientLight(0xffffff, 0.7);
    light1.position.set(0, 1, 3);
    this.scene.add(light2);

    const light3 = new THREE.HemisphereLight();
    this.scene.add(light3);

    // const light = new THREE.PointLight(0xff0000, 10, 10);
    // light1.position.set(0, 1, 3);
    // this.scene.add(light);

    this.renderer.setClearColor(0xcccccc, 0);

    this.camera.position.z = 2;
    this.camera.position.y = 0.5;
    this.scene.position.y = -0.5;
    this.scene.add(this.camera);

    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 2.2;

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputEncoding = sRGBEncoding;
    this.renderer.toneMappingExposure = 1;
    this.renderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight
    );
    this.renderer.physicallyCorrectLights = true;
    this.mount.appendChild(this.renderer.domElement);

    this.controls.zoomSpeed = 0.3;
    this.controls.rotateSpeed = 0.5;
    this.controls.panSpeed = 0.5;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    this.controls.update();

    window.addEventListener("resize", this.onResize, false);

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
        this.controls.update();
        actions.forEach((action) => {
          action.play();
        });
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
      meshItem.rotation.x += model.rotNoAR.x;
      meshItem.rotation.y += model.rotNoAR.y;
      meshItem.rotation.z += model.rotNoAR.z;

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
    this.controls.dispose();
    this.mount.removeChild(this.renderer.domElement);
    this.renderer.dispose();
    this.scene = undefined;
    this.root = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.controls = undefined;
    this.clock = undefined;
    window.removeEventListener("resize", this.onResize);
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
    this.camera.aspect =
      this.container.offsetWidth / this.container.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(
      this.container.offsetWidth,
      this.container.offsetHeight
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div id="model-view" className="background">
        {loading ? <LoadingScreen text="LOADING-MODEL" /> : <></>}
        {/* eslint-disable-next-line no-return-assign */}
        <div ref={(ref) => (this.mount = ref)} />
      </div>
    );
  }
}

export default ModelViewerNoAR;

ModelViewerNoAR.propTypes = {
  model: PropTypes.shape({
    pattern: PropTypes.string.isRequired,
    scale: PropTypes.number.isRequired,
    pos: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    rotNoAR: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    looponce: PropTypes.bool,
  }).isRequired,
  path: PropTypes.string.isRequired,
};
