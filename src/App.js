import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import linearSearch from './linearSearch';


class App extends Component {
  constructor(props){
    super(props);
    this.number = React.createRef();
  }
  state = {
    searchArray: [89, 30, 25, 32, 72],
    result: null
  };
  getResult(e){
    e.preventDefault();
    this.setState({
      result: linearSearch(this.number.current.valueAsNumber, this.state.searchArray)
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Searching!</h1>
        <form>
          <label htmlFor='search'>Search</label>
          <input type='number' name='Search' id='search' ref={this.number}></input>
          <br/>
          <button type='button' onClick={(e) => this.getResult(e)}>Lineary Search</button>
          <br/>
          <button>Binary Search</button>
        </form>
        <div className='feedback'>
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default App;
