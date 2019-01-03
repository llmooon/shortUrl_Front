import React, { Component } from 'react';
import './App.css';
import InputUrl from './InputUrl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <InputUrl />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
