import React, { Component } from 'react';
import './App.css';
import fb from './assets/fb.png';
import lin from './assets/lin.png';
import tt from './assets/tt.png';
import gm from './assets/gm.png';
import gt from './assets/gt.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <text className="name">
           Artur Bruno de Sena Santana
          </text>
        </header>
        <div className="social">
            <a href="https://stackoverflow.com/"><img src={fb} alt="" className="img" /></a>
            <a href="https://stackoverflow.com/"><img src={lin} alt="" className="img" /></a>
            <a href="https://stackoverflow.com/"><img src={gt} alt="" className="img3" /></a>
            <a href="https://stackoverflow.com/"><img src={gm} alt="" className="img2" /></a>
            <a href="https://stackoverflow.com/"><img src={tt} alt="" className="img2" /></a>
        </div>
      </div>
    );
  }
}

export default App;
