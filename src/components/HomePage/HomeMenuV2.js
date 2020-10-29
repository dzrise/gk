import React, { Component } from 'react';
import * as THREE from 'three';
import { useShader, useProgram } from '@react-vertex/shader-hooks'
import OrbitControls from "three-orbitcontrols";
import HomeMenuLink from "./HomeMenuLink";

import vert from 'vert.glsl'
import frag from 'frag.glsl'
import '../../assets/css/menu.css'

const Sky = require('three-sky');
export default class HomeMenuV2 extends Component {
    constructor() {
        super();
        this.onInputMove = this.onInputMove.bind(this)
        this.mouse = { x:0, y:0, xDamped:0, yDamped:0 };
    }


    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        const  isMobile = typeof window.orientation !== 'undefined'

        if(isMobile)
            window.addEventListener("touchmove", this.onInputMove, {passive:false})
        else
            window.addEventListener("mousemove", this.onInputMove)

        window.addEventListener("resize", this.resize)

        this.scene = new THREE.Scene();
        this.fogColor = new THREE.Color( 0x333333 )
        this.background = this.fogColor;
        this.scene.fog = new THREE.Fog(this.fogColor, 0, 400);

        this.sky = new Sky();
        this.sky.scale.setScalar( 450000 );
        this.sky.material.uniforms.turbidity.value = 13;
        this.sky.material.uniforms.rayleigh.value = 1.2;
        this.sky.material.uniforms.luminance.value = 1;
        this.sky.material.uniforms.mieCoefficient.value = 0.1;
        this.sky.material.uniforms.mieDirectionalG.value = 0.58;

        this.scene.add( this.sky );

        this.sunSphere = new THREE.Mesh(
            new THREE.SphereBufferGeometry( 20000, 16, 8 ),
            new THREE.MeshBasicMaterial( { color: 0xffffff } )
        );
        this.sunSphere.visible = false;
        this.scene.add( this.sunSphere );

        const theta = Math.PI * ( -0.002 );
        const phi = 2 * Math.PI * ( -.25 );

        this.sunSphere.position.x = 400000 * Math.cos( phi );
        this.sunSphere.position.y = 400000 * Math.sin( phi ) * Math.sin( theta );
        this.sunSphere.position.z = 400000 * Math.sin( phi ) * Math.cos( theta );

        this.sky.material.uniforms.sunPosition.value.copy( this.sunSphere.position );

        this.camera = new THREE.PerspectiveCamera(60, width / height, .1, 10000);
        this.camera.position.y = 8;
        this.camera.position.z = 4;

        this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(this.ambientLight)

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setPixelRatio = devicePixelRatio;
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement)

        this.geometry = new THREE.PlaneBufferGeometry(100, 400, 400, 400);

        this.uniforms = {
            time: { type: "f", value: 0.0 },
            scroll: { type: "f", value: 0.0 },
            distortCenter: { type: "f", value: 0.1 },
            roadWidth: { type: "f", value: 0.5 },
            pallete:{ type: "t", value: null},
            speed: { type: "f", value: 3 },
            maxHeight: { type: "f", value: 10.0 },
            color:new THREE.Color(1, 1, 1)
        }

         this.material = new THREE.ShaderMaterial({
            uniforms: THREE.UniformsUtils.merge([ THREE.ShaderLib.basic.uniforms, this.uniforms ]),
            vertexShader: vert,
            fragmentShader: frag,
            wireframe:false,
            fog:true
        });

        this.terrain = new THREE.Mesh(this.geometry, this.material);
        this.terrain.position.z = -180;
        this.terrain.rotation.x = -Math.PI / 2

        this.scene.add(this.terrain)

        new THREE.TextureLoader().load( '/img/fonland.png', function(texture){
            this.terrain.material.uniforms.pallete.value = texture;
            this.terrain.material.needsUpdate = true;
        });

        const controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.resize();
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

    resize = () =>{
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( width, height );
    } ;

    getRandomNumber = (min, max) => (Math.random() * (max - min) + min);

    onInputMove(e) {
        e.preventDefault();
        let x;
        let y;

        if(e.type == "mousemove"){
            x = e.clientX;
            y = e.clientY;
        } else {
            x = e.changedTouches[0].clientX
            y = e.changedTouches[0].clientY
        }

        this.mouse.x = x;
        this.mouse.y = y;

    }


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
