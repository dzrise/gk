import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';

class ButtonProjects extends Component {
    constructor(props) {
        super(props)

        this.url = '/digital-economy/projects'
        this.goLink = this.goLink.bind(this)
    }

    goLink() {
        this.props.history.push(this.url)
    }
    render() {
        let styleButtonProjects = {
            position:'absolute',
            right: 50,
            bottom: '-30px',
            border: 'none',
            background: 'url(/img/bg-button.png)',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Roboto',
            fontSize: 12,
            color: '#ffffff',
            padding: '25px 40px 35px 40px',
            cursor: 'pointer',
        }
        return (
            <button style={styleButtonProjects} onClick={this.goLink}>
                Проекты
            </button>
        );
    }
}
export default withRouter(ButtonProjects)
