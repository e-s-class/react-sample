import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import {decrement, increment, updateTitle} from "./store/actions/rootAction";

class App extends Component {
  render() {
    const { title, counter, increment, decrement} = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              { title } (counter: { counter })
          </p>
          <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ title, counter }) => ({ title, counter });

export default connect(
    mapStateToProps, {
      updateTitle,
      increment,
      decrement,
    })(App);
