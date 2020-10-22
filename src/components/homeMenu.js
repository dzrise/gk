import React, { Component } from 'react';
import HomeMenuLink from "./HomeMenuLink";

import '../assets/css/menu.css'
export default class HomeMenu extends Component {

    render() {
        let styleHomeMenu = {

        }
        return (
            <>
                <HomeMenuLink class="link-one" top="34.947916667%" left="3%" linkTextFirst="История" LinkTextSecond="компании"/>
                <HomeMenuLink class="link-two" top="54.875%" left="14.641288433%" linkTextFirst="ГТЛКв" LinkTextSecond="цифрах"/>
                <HomeMenuLink class="link-three" top="16.671875%" left="28.184480234%" linkTextFirst="Национальные" LinkTextSecond="проекты"/>
                <HomeMenuLink class="link-four" top="37.552083333%" left="45.387994143%" linkTextFirst="Государственные" LinkTextSecond="программы"/>
                <HomeMenuLink class="link-five"  top="46.0625%" left="53.440702782%" linkTextFirst="Цифровое" LinkTextSecond="управление"/>
                <HomeMenuLink class="link-six"  top="29.390625%" left="70.644216691%" linkTextFirst="География" LinkTextSecond="инвестиций"/>
            </>
        );
    }

}
