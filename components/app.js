import React from 'react';
import Child from './child';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['fox', 'falco', 'marth']
    }
    this.changeWords = this.changeWords.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }
  renderChildren() {
    return this.state.words.map( (x) => {
      return <Child myProp={x} changeWords={this.changeWords}/>
    })
  }

  changeWords() {
    console.log('hi');
    this.setState((prevState) => {
      prevState.words.pop();
      return {
        words: prevState.words
      }
    })
  }
  
  render() {
    
    return (
      <div>
        <p>This is my new React App</p>
        {this.renderChildren()}
      </div>
    )
  }
}