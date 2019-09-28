import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: 0,
      secondNum: 0,
      result: 0,
    }
  }

  handleResult = (e) =>{
    e.preventDefault();
    if (e.target.value === "+"){
      this.setState ({result: this.state.firstNum + this.state.secondNum})
    }
    if (e.target.value === "-"){
      this.setState ({result: this.state.firstNum - this.state.secondNum})
    }
    if (e.target.value === "*"){
      this.setState ({result: this.state.firstNum * this.state.secondNum})
    }
    if (e.target.value === "/"){
      this.setState ({result: this.state.firstNum / this.state.secondNum})
    }
    if (e.target.value === "^"){
      this.setState ({result: this.state.firstNum ** this.state.secondNum})
    }
  }

  render(){
    return(
      <div>
        <input type = "number" onChange={(e) => this.setState({firstNum: Number(e.target.value)})}/>
        <input type = "number" onChange={(e) => this.setState({secondNum: Number(e.target.value)})}/>
        <div>
        <button value = "+" onClick = {(e) => this.handleResult(e)}>+</button>
        <button value = "-" onClick = {(e) => this.handleResult(e)}>-</button>
        <button value = "*" onClick = {(e) => this.handleResult(e)}>*</button>
        <button value = "/" onClick = {(e) => this.handleResult(e)}>/</button>
        <button value = "^" onClick = {(e) => this.handleResult(e)}>^</button>
        </div>
        <div><h2>{this.state.result}</h2></div>
      </div>
    )
  }
}

export default App;
