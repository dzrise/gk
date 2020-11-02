import React, { Component } from 'react';
import * as THREE from 'three';
import Sky from 'three-sky';
import OrbitControls from 'three-orbitcontrols';
import HomeMenuLink from "./HomeMenuLink";

import '../../assets/css/menu.css'
/* eslint import/no-webpack-loader-syntax: off */
import frag from '!raw-loader!./frag.frag';
/* eslint import/no-webpack-loader-syntax: off */
import vert from '!raw-loader!./vert.vert';

export default class HomeMenu extends Component {
    constructor(props){
        super(props);
        this.state={
        }
        this.onInputMove = this.onInputMove.bind(this);
        this.resize = this.resize.bind(this);
        this.skyAdd = this.skyAdd.bind(this);
        this.map = this.map.bind(this);
        this.lerp = this.lerp.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.computeBoundingBox = this.computeBoundingBox.bind(this);
        this.setupScene = this.setupScene.bind(this);
        this.destroyContext = this.destroyContext.bind(this);
    }

    componentDidMount(){
        this.width = this.mount.clientWidth;
        this.height = this.mount.clientHeight;
        const isMobile = typeof window.orientation !== 'undefined'
        this.mouse = { x:0, y:0, xDamped:0, yDamped:0 };


        this.setupScene()
        this.computeBoundingBox()
        this.start()

        if(isMobile)
            window.addEventListener("touchmove", this.onInputMove, {passive:false})
        else
            window.addEventListener("mousemove", this.onInputMove)

        window.addEventListener("resize", this.resize)

        this.resize()

    }

    setupScene(){

        let scene = new THREE.Scene();
        this.scene = scene;
        let fogColor = new THREE.Color( 0x414142 )
        scene.background = fogColor;
        scene.fog = new THREE.Fog(fogColor, 0, 400);

        this.skyAdd();

        let camera = new THREE.PerspectiveCamera(60, this.width/this.height, 0.25, 1000);
        camera.position.y = 8;
        camera.position.z = 4;

        let ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight)

        scene.add(camera);

        const renderer = new THREE.WebGLRenderer( {
            antialias:true
        } );
        this.mount.appendChild(renderer.domElement);

        renderer.setPixelRatio = devicePixelRatio;
        renderer.setSize(this.width, this.height);

        this.renderer = renderer;
        this.camera = camera;
    }

    computeBoundingBox(){
        const geometry = new THREE.PlaneBufferGeometry(100, 400, 400, 400);

        const uniforms = {
            time: { type: "f", value: 0.0 },
            scroll: { type: "f", value: 0.0 },
            distortCenter: { type: "f", value: 0.1 },
            roadWidth: { type: "f", value: 0.5 },
            pallete:{ type: "t", value: null},
            speed: { type: "f", value: 3 },
            maxHeight: { type: "f", value: 10.0 },
            color:new THREE.Color(1, 1, 1)
        }

        const material = new THREE.ShaderMaterial({
            uniforms: THREE.UniformsUtils.merge([ THREE.ShaderLib.basic.uniforms, uniforms ]),
            vertexShader: vert,
            fragmentShader: frag,
            wireframe:false,
            fog:true
        });

        const terrain = new THREE.Mesh(geometry, material);
        terrain.position.z = -180;
        terrain.rotation.x = -Math.PI / 2
        this.terrain = terrain

        this.scene.add(this.terrain)

        new THREE.TextureLoader().load( '/img/pallete5.png', function(texture){
            terrain.material.uniforms.pallete.value = texture;
            terrain.material.needsUpdate = true;
        });

    }


    skyAdd(){
        const sky = new Sky();
        sky.scale.setScalar( 450000 );
        sky.material.uniforms.turbidity.value = 13;
        sky.material.uniforms.rayleigh.value = 1.2;
        sky.material.uniforms.luminance.value = 1;
        sky.material.uniforms.mieCoefficient.value = 0.1;
        sky.material.uniforms.mieDirectionalG.value = 0.58;

        this.scene.add( sky );

        const sunSphere = new THREE.Mesh(
            new THREE.SphereBufferGeometry( 20000, 16, 8 ),
            new THREE.MeshBasicMaterial( { color: 0xffffff } )
        );

        sunSphere.visible = false;
        this.scene.add( sunSphere );

        let theta = Math.PI * ( -0.002 );
        let  phi = 2 * Math.PI * ( -.25 );

        sunSphere.position.x = 400000 * Math.cos( phi );
        sunSphere.position.y = 400000 * Math.sin( phi ) * Math.sin( theta );
        sunSphere.position.z = 400000 * Math.sin( phi ) * Math.cos( theta );

        sky.material.uniforms.sunPosition.value.copy( sunSphere.position );
    }

    map (value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    }

    lerp (start, end, amt){
        return (1 - amt) * start + amt * end
    }

    start() {
        this.renderScene();
    }

    renderScene(){
        requestAnimationFrame(this.renderScene)

        this.mouse.xDamped = this.lerp(this.mouse.xDamped, this.mouse.x, 0.1);
        this.mouse.yDamped = this.lerp(this.mouse.yDamped, this.mouse.y, 0.1);


        let time = performance.now() * 0.001
        this.terrain.material.uniforms.time.value = time
        this.terrain.material.uniforms.scroll.value = time + this.map(this.mouse.yDamped, 0, this.height, 0, 4);
        this.terrain.material.uniforms.distortCenter.value = Math.sin(time) * 0.1;
        this.terrain.material.uniforms.roadWidth.value = this.map(this.mouse.xDamped, 0, this.width, 1, 4.5);

        this.camera.position.y = this.map(this.mouse.yDamped, 0, this.height, 4, 11);

        this.renderer.render(this.scene, this.camera)
    }

    animate() {

    }


    stop() {
        this.mount.removeChild(this.renderer.domElement);
    }

    componentWillUnmount(){
        this.stop();
        this.destroyContext();
    }

    destroyContext(){

    }


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

    resize(){
        this.camera.aspect = this.width/this.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( this.width, this.height );
    }


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
