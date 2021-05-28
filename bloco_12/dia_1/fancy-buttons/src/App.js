import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      numeroDeClicksCenter: 0,
      numeroDeClicksRight: 0,
      numeroDeClicksLeft: 0,
    }

    this.handleClickCenter = this.handleClickCenter.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
  }

  handleClickRight() {
    console.log('Bolsonaro');
    if (this.state.numeroDeClicksRight % 2 !== 0){
      document.querySelector('.right').style.backgroundColor = 'green'
    } else {
      document.querySelector('.right').style = ''
    }
    this.setState((previousState, _props) => ({
      numeroDeClicksRight: previousState.numeroDeClicksRight + 1
    }))
    
  }

  handleClickCenter() {
    console.log('Frouxonaro');
    this.setState((previousState, _props) => ({
      numeroDeClicksCenter: previousState.numeroDeClicksCenter + 1
    }))
    if (this.state.numeroDeClicksCenter % 2 !== 0){
      document.querySelector('.center').style.backgroundColor = 'green';
    } else {
      document.querySelector('.center').style = '';
    }
  }

  handleClickLeft() {
    console.log('Bolsonaro Invertido');
    this.setState((previousState, _props) => ({
      numeroDeClicksLeft: previousState.numeroDeClicksLeft + 1
    }))
    if (this.state.numeroDeClicksLeft % 2 !== 0){
      document.querySelector('.left').style.backgroundColor = 'green';
    } else {
      document.querySelector('.left').style = '';
    }
  }

  render() {
    return (
      <div>
        <button className="right" onClick={this.handleClickRight}>{this.state.numeroDeClicksRight}</button>
        <button className="center" onClick={this.handleClickCenter}>{this.state.numeroDeClicksCenter}</button>
        <button className="left" onClick={this.handleClickLeft}>{this.state.numeroDeClicksLeft}</button>
      </div>
    )
  }
}

export default App;
