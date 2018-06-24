import React from 'react';

export default class Grandchild extends React.Component {
  getLetter(word) {
    let ranNum = Math.floor(Math.random() * word.length); 
    return word[ranNum];
  }
  
  render() {
    return(
      <div>
        <p>And the special letter is: {this.getLetter(this.props.grandprop)}</p>
        <button onClick={this.props.changeWords}>Pop it</button>
      </div>
    )
  }
}