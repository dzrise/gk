import React, { Component } from 'react';
import {ReactComponent as ReactMap} from '../../../assets/img/map.svg';

export default class Header extends Component {
    render() {
        let styleSvg = {
            width: '80%',
            display: 'block',
            margin: '0 auto',
        }
        return (
            <div className='map'>
               <ReactMap style={styleSvg}/>
            </div>
        );
    }
}
