import React, { Component } from 'react';


export default class ItemProject extends Component {

    render() {
        let className = 'item-project__card';
        if (this.props.isActive) {
            className += ' active';
        }
        let styleItemProject = {
            backgroundImage: 'url('+this.props.backgroundImage+')',
            backgroundRepeat: 'no-repeat',
        }
        let styleSubTitle = {
            fontFamily: 'Roboto',
            fontSize: 10,
            color: '#b3b3b3',
            marginBottom: 150,
        }
        let styleTitle = {
            fontFamily: 'Roboto',
            fontSize: 20,
            color: '#ffffff',
        }
        return (
            <div className='item-project' style={styleItemProject}>
                <div className={className}>
                    <div style={styleSubTitle}>
                        <div className='new-line'>национальный</div>
                        <div className='new-line'>проект</div>
                    </div>
                    <div className='item-project__title' style={styleTitle}>
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}
