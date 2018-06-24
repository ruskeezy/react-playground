import React from 'react';
import Grandchild from './grandchild';

export default class Child extends React.Component {
  render() {
    return (
      <div>
        <p>Your word is: {this.props.myProp}</p>
        <Grandchild grandprop={this.props.myProp} changeWords={this.props.changeWords} />
      </div>
    )
  }
}