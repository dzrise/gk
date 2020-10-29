import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import OrbitControls from "three-orbitcontrols";
import HomeMenuLink from "./HomeMenuLink";

import '../../assets/css/menu.css'
export default class HomeMenu extends Component {
    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement)

        this.camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
        this.camera.position.z = 8;
        this.camera.position.y = 5;

        const controls = new OrbitControls(this.camera, this.renderer.domElement);

        const texture = new THREE.TextureLoader().load( "/img/fonland.png" );
        texture.minFilter = THREE.LinearFilter;
        this.scene.background = texture;

        this.loader = new GLTFLoader();
        this.loader.load( '/img/earth.glb', gltf => {

            this.scene.add( gltf.scene );

        } );

        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.AmbientLight(color, intensity);
        this.scene.add(light);

        this.renderScene();
        this.start();

    }
    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }


    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    };
    stop = () => {
        cancelAnimationFrame(this.frameId);
    };
    animate = () => {
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    };
    renderScene = () => {
        if (this.renderer) this.renderer.render(this.scene, this.camera);
    };

    render() {
        let styleHomeMenu = {

        }
        return (
            <div ref={(mount) => { this.mount = mount }} style={{width: '100%', height: '100%'}}>
                <HomeMenuLink
                    class="link-one"
                    top="34.947916667%"
                    left="3%"
                    linkTextFirst="История"
                    LinkTextSecond="компании"
                    link={'/history-company'}
                />
                <HomeMenuLink
                    class="link-two"
                    top="54.875%"
                    left="14.641288433%"
                    linkTextFirst="ГТЛКв"
                    LinkTextSecond="цифрах"
                />
                <HomeMenuLink
                    class="link-three"
                    top="16.671875%"
                    left="28.184480234%"
                    linkTextFirst="Национальные"
                    LinkTextSecond="проекты"
                    link='/national-projects'
                />
                <HomeMenuLink
                    class="link-four"
                    top="37.552083333%"
                    left="45.387994143%"
                    linkTextFirst="Государственные"
                    LinkTextSecond="программы"
                />
                <HomeMenuLink
                    class="link-five"
                    top="46.0625%"
                    left="53.440702782%"
                    linkTextFirst="Цифровое"
                    inkTextSecond="управление"
                    link='/digital-economy'
                />
                <HomeMenuLink
                    class="link-six"
                    top="29.390625%"
                    left="70.644216691%"
                    linkTextFirst="География"
                    LinkTextSecond="инвестиций"
                />
            </div>
        );
    }

}
