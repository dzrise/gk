import React, { Component } from 'react';
export default class ButtonProjects extends Component {
    render() {
        let styleButtonProjects = {
            position:'absolute',
            right: 50,
            bottom: 50,
            width: 142,
            height: 77,
            backgroundImage: 'url(/img/button.png)',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Roboto',
            fontSize: 12,
            color: '#ffffff'
        }
        return (
            <Button style={styleButtonProjects}>
                Проекты
            </Button>
        );
    }
}
