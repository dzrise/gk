import React, { Component } from 'react';
import Header from "../components/Header";

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="hello">
                    hello word
                </div>
            </>
        );
    }
}

