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
    let numberkey =[], operators =[], j=0, k=".";

    for(let i =1; i < 10; i++) {
      numberkey.push(<Keybutton text={i} key={i} onKeyPressed={this.onKeyPressed} className="key-pad num-key" />)
    }

    for(let i of ['+', '-', '/', '%']){
      operators.push(<Keybutton text={i} key={i} onKeyPressed={this.onKeyPressed} className="oper-key key-pad" />)
    }

    return(
      <React.Fragment>
        <DisplayWindow expression={this.state.expression} />
        <div className="key-window">
          <div className="calc">
            <div className="number-key">
              {numberkey}
              <span className="bind-key">
                <Keybutton text={j} key={j} onKeyPressed={this.onKeyPressed} className="num-pad-0 key-pad num-key" />
                <Keybutton text={k} key={k} onKeyPressed={this.onKeyPressed} className="num-pad-0 key-pad num-key" />
                
              </span>
            </div>
            <div className="operators-key">
              {operators}
            </div>
          </div>
            <div className="memory-key">
              <span className="bind-key">
              <button onClick={this.onDeletePressed.bind(this)} className="key-pad mem-key">C</button>
              <button onClick={this.onClearAllPressed.bind(this)} className="key-pad mem-key">CA</button>
              </span>
              <button onClick={this.onEvlPressed.bind(this)} className="key-pad oper-key">=</button>
            </div>
        </div>

      </React.Fragment>
    );
  }
}
