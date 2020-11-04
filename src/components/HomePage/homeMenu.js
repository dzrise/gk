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
    }


    render() {
        let styleHomeMenu = {

        }
        return (
            <div ref={(mount) => { this.mount = mount }} style={{width: '100%', height: '100%', background: 'url(/img/fonland.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
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
