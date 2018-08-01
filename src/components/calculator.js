import React from 'react';
import DisplayWindow from './displayfield';
import Keybutton from './keybuttonts';
export default class Calculator extends React.Component{
  constructor(){
    super();
    this.state = {expression : '0'}
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  onKeyPressed(text){
    this.setState((prev) => ({
      expression: prev.expression === "0" ? text.toString() : prev.expression + text
    }));
  }
  onDeletePressed(){
    this.setState((prev) =>({
      expression: prev.expression.length <= 1 ? "0" : prev.expression.slice(0, -1)
    }));
  }
  onEvlPressed(){
    const result = eval(this.state.expression);
    this.setState((prev) =>({
      expression: result.toString()
    }));
  }
onClearAllPressed(){
  this.setState({
    expression: '0'
  });
}
  render(){
    let numberkey =[], operators =[];

    for(let i =0; i < 10; i++) {
      numberkey.push(<Keybutton text={i} key={i} onKeyPressed={this.onKeyPressed} />)
    }

    for(let i of ['+', '-', '/', '%']){
      operators.push(<Keybutton text={i} key={i} onKeyPressed={this.onKeyPressed} />)
    }

    return(
      <div>
        <DisplayWindow expression={this.state.expression} />
        {numberkey}
        {operators}

        <button onClick={this.onEvlPressed.bind(this)}>=</button>
        <button onClick={this.onDeletePressed.bind(this)}>C</button>
        <button onClick={this.onClearAllPressed.bind(this)}>CA</button>

      </div>
    );
  }
}
