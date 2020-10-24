import React, { Component } from 'react';

export default class ItemProject extends Component {

    render() {
        let className = 'item-project__card';
        if (this.props.isActive) {
            className += ' active';
        }
        let styleItemProject = {
            backgroundImage: this.props.backgroundImage,
        }
        return (
            <div className='item-project' style={styleItemProject}>
                <div className={className}>
                    <div>
                        <div className='new-line'>национальный</div>
                        <div className='new-line'>проект</div>
                    </div>
                    <div className='item-project__title'>
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}
