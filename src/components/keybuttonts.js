import React from 'react';
export default class Key extends React.Component {

constructor(){
  super();
  this.state = {expression: '0'}
}

onKeyPressed(){
  this.props.onKeyPressed(this.props.text);
}
render(){
return(
  <button onClick={() => this.onKeyPressed()} className = {this.props.className}>{this.props.text}</button>
);
}

}
