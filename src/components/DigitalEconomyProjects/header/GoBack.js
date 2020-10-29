import React, { Component } from 'react';
import close from '../../../assets/img/close-white.png'
import {withRouter} from 'react-router-dom'

class GoBack extends Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }
    goBack() {
        this.props.history.goBack()
    }
    render() {
        let styleIcon = {
            marginLeft: '10px',
            cursor: 'pointer',
        }
        return (
            <>
                <img src={close} alt="" style={styleIcon} onClick={() => this.goBack()} />
            </>
        );
    }
}

export default withRouter(GoBack)
