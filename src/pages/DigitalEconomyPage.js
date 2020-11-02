import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import Header from "../components/DigitalEconomy/Header";
import DigitalCard from "../components/DigitalEconomy/page/DigitalCard";
import CardOne from "../components/DigitalEconomy/page/CardOne";
import CardTwo from "../components/DigitalEconomy/page/CardTwo";
import CardThree from "../components/DigitalEconomy/page/CardThree";
import RightCard from "../components/DigitalEconomy/page/RightCard";
import RightCardOne from "../components/DigitalEconomy/page/RightCardOne";
import RightCardTwo from "../components/DigitalEconomy/page/RightCardTwo";
import RightCardThree from "../components/DigitalEconomy/page/RightCardThree";
import Rout from "../components/DigitalEconomy/page/Rout";
import ButtonProjects from "../components/DigitalEconomy/page/ButtonProjects";

export default class DigitalEconomyPage extends Component {
    constructor() {
        super();
        this.state = { active: 1, zIndexOne: 4, zIndexTwo: 3, zIndexThree: 2,}
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.computeBoundingBox = this.computeBoundingBox.bind(this);
        this.setupScene = this.setupScene.bind(this);
        this.destroyContext = this.destroyContext.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleWindowResize)
        this.setupScene();
    }

    setupScene(){
        this.width = this.mount.clientWidth;
        this.height = this.mount.clientHeight;

        const renderer = new THREE.WebGLRenderer({antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0x414142 );

        let camera = new THREE.PerspectiveCamera(60, this.width/this.height, 0.25, 1000);
        scene.add(camera);

        let sphere = new THREE.SphereGeometry(60, 300, 300);
        let material = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load('/test/2_no_clouds_4k.jpg'),
        });
        let mesh = new THREE.Mesh(sphere, material);

        scene.add(mesh);

        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
        this.object = mesh;

        let spotLight = new THREE.SpotLight(0xffffff, 0.25)
        spotLight.position.set(45, 50, 15);
        camera.add(spotLight);
        this.spotLight = spotLight;

        let ambLight = new THREE.AmbientLight(0x333333);
        ambLight.position.set(5, 3, 5);
        this.camera.add(ambLight);

        this.computeBoundingBox();
    }

    computeBoundingBox(){
        let offset = 1.60;
        const boundingBox = new THREE.Box3();
        boundingBox.setFromObject(this.object);
        const center = boundingBox.getCenter();
        const size = boundingBox.getSize();
        const maxDim = Math.max( size.x, size.y, size.z );
        const fov = this.camera.fov * ( Math.PI / 180 );
        let cameraZ = maxDim / 2 / Math.tan( fov / 2 );
        cameraZ *= offset;
        this.camera.position.z = center.z + cameraZ;
        const minZ = boundingBox.min.z;
        const cameraToFarEdge = ( minZ < 0 ) ? -minZ + cameraZ : cameraZ - minZ;

        this.camera.far = cameraToFarEdge * 3;
        this.camera.lookAt(center);
        this.camera.updateProjectionMatrix();

        let controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
        controls.zoomSpeed = 0.1;
        controls.enableKeys = false;
        controls.screenSpacePanning = false;
        controls.enableRotate = true;
        controls.autoRotate = true;
        controls.dampingFactor = 1;
        controls.autoRotateSpeed = 1.2;
        controls.enablePan = false;
        controls.target.set(center.x, center.y, center.z);
        controls.update();
        this.controls = controls;
        this.renderer.setSize(this.width, this.height);
        this.mount.appendChild(this.renderer.domElement);
        this.start();
    }

    start(){
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    renderScene(){
        this.renderer.render(this.scene, this.camera)
    }

    animate() {
        this.frameId = requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderScene();
    }

    stop() {
        cancelAnimationFrame(this.frameId);
    }

    handleWindowResize(){
        let width = this.mount.clientWidth
        let height =  this.mount.clientHeight;
        this.camera.aspect = width/height;
        this.camera.updateProjectionMatrix();
    }

    componentWillUnmount(){
        this.stop();
        this.destroyContext();
    }

    destroyContext(){
        this.mount.removeChild(this.renderer.domElement);
        this.renderer.forceContextLoss();
        this.renderer.domElement = null;
        this.renderer = null;
    }
    render() {
        let pageStyle = {
            position: 'relative',
            width: '100%',
            height: '85.5vh',
        }
        let styleInner = {
            padding: '125px 50px 0 50px',
            display: 'flex',
        }
        let styleCol = {
            position: 'relative',
            flexBasis: 0,
            flexGrow: 1,
            maxWidth: '100%',
            zIndex: 2,
        }
        let styleRoutWrapper = {
            display: 'flex',
            justifyContent: 'center',
        }
        let styleRout = {
            width: '50px',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 50
        }
        return (
            <div >
                <div  ref={(mount) => { this.mount = mount }} className="digital-economy"  style={pageStyle}>
                    <Header/>
                    <div className='digital-economy__inner' style={styleInner}>
                        <div style={styleCol}>
                            <DigitalCard left='0px' zIndex={this.state.zIndexOne} onClick={()=>{this.setState({active: 1, zIndexOne: 4, zIndexTwo: 3, zIndexThree: 2})}}>
                                <CardOne  display={this.state.active === 1 ? 'block' : 'none'}/>
                            </DigitalCard>
                            <DigitalCard left='70px' zIndex={this.state.zIndexTwo} onClick={()=>{this.setState({active: 2, zIndexOne: 2, zIndexTwo: 4, zIndexThree: 3})}}>
                                <CardTwo  display={this.state.active === 2 ? 'block' : 'none'}/>
                            </DigitalCard>
                            <DigitalCard left='140px' zIndex={this.state.zIndexThree} onClick={()=>{this.setState({active: 3, zIndexOne: 2, zIndexTwo: 3, zIndexThree: 4})}}>
                                <CardThree  display={this.state.active === 3 ? 'block' : 'none'}/>
                            </DigitalCard>
                        </div>
                        <div style={styleCol}>
                            <RightCard display={this.state.active === 1 ? 'block' : 'none'}>
                                <RightCardOne/>
                            </RightCard>
                            <RightCard display={this.state.active === 2 ? 'block' : 'none'}>
                                <RightCardTwo/>
                            </RightCard>
                            <RightCard display={this.state.active === 3 ? 'block' : 'none'}>
                                <RightCardThree/>
                            </RightCard>
                            <div style={styleRoutWrapper}>
                                <div className='tools' style={styleRout}>
                                    <Rout className={this.state.active === 1 ? 'active': ''} onClick={()=>{this.setState({active: 1, zIndexOne: 4, zIndexTwo: 3, zIndexThree: 2})}}/>
                                    <Rout className={this.state.active === 2 ? 'active': ''} onClick={()=>{this.setState({active: 2, zIndexOne: 2, zIndexTwo: 4, zIndexThree: 3})}}/>
                                    <Rout className={this.state.active === 3 ? 'active': ''} onClick={()=>{this.setState({active: 3, zIndexOne: 2, zIndexTwo: 3, zIndexThree: 4})}}/>
                                </div>
                            </div>
                            <ButtonProjects/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
