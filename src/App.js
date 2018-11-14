import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import linearSearch from './linearSearch';
import binarySearch from './binarySearch.js';

class App extends Component {
  constructor(props){
    super(props);
    this.number = React.createRef();
  }
  state = {
    searchArray: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2,
      14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16,
      85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28,
      13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    result: null
  };
  getResult(e){
    e.preventDefault();
    this.setState({
      result: linearSearch(this.number.current.valueAsNumber, this.state.searchArray)
    });
  }

  getBinaryResult(e) {
    e.preventDefault();
    const sortedArray = this.state.searchArray.sort((a, b) => a - b);
    this.setState({
      result: binarySearch(this.number.current.valueAsNumber, sortedArray)
    })
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
          <button type="button" onClick={(e) => this.getBinaryResult(e)}>Binary Search</button>
        </form>
        <div className='feedback'>
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default App;
