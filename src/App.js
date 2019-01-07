import React, { Component } from 'react';
import './App.css';
import InputUrl from './InputUrl';
import Error from './error';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <form>
              <Route exact path="/" component={InputUrl}/>
              <Route path="/error" component={Error}/>
            </form>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
