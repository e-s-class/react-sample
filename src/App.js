import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import {decrement, increment, updateTitle} from "./store/actions/rootAction";

const Title = ({ title }) => (<div>{title}</div>);
const Counter = ({ counter }) => (<div>(counter: { counter })</div>);

const Name = ({ name }) => <div>{name}</div>;
const Names = ({ names }) => names.map((name) => <Name name={name}/>);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ['ABC', 'BCD', '123'],
    }
  }

  renderNames() {
    const { names } = this.state;

    return names.map((name) => <div>{name}</div>);
  }

  render() {
    const { title, counter, increment, decrement} = this.props;
    const { names } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { counter % 2 === 0 && <Title title={title}/>}
            <Counter counter={counter}/>
            <Names names={names}/>
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
