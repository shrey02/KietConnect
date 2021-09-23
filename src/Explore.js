import React, { Component } from 'react';
import './Explore.css';
import TopNav from './Nav';
import MainArea from './MainArea';

class Explore extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <MainArea />
      </div>
    );
  }
}

export default Explore;