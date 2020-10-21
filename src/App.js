import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

//components
import Footer from "./components/Footer";

//aps

export default class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <main>
              <Routes/>
            </main>
            <Footer/>
          </div>
        </Router>
    );
  }
}
