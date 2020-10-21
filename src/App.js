import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

//components

import Header from "./components/Header";
import Footer from "./components/Footer";

//aps

export default class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Header/>
            <main>
              <Routes/>
            </main>
            <Footer/>
          </div>
        </Router>
    );
  }
}
