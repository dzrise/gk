import React, { Component } from 'react';
import HomeMenuLink from "./HomeMenuLink";

import '../assets/css/menu.css'
export default class HomeMenu extends Component {
    render() {
        let styleHomeMenu = {

        }
        return (
            <>
                <HomeMenuLink class="link-one" top="230px" left="45px" linkTextFirst="История" LinkTextSecond="компании"/>
                <HomeMenuLink class="link-two" top="360px" left="200px" linkTextFirst="ГТЛКв" LinkTextSecond="цифрах"/>
                <HomeMenuLink class="link-three" top="105px" left="385px" linkTextFirst="Национальные" LinkTextSecond="проекты"/>
                <HomeMenuLink class="link-four" top="250px" left="620px" linkTextFirst="Государственные" LinkTextSecond="программы"/>
                <HomeMenuLink class="link-five"  top="300px" left="730px" linkTextFirst="Цифровое" LinkTextSecond="управление"/>
                <HomeMenuLink class="link-six"  top="195px" left="965px" linkTextFirst="География" LinkTextSecond="инвестиций"/>
            </>
        );
    }

}
