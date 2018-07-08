import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }
  
  handleClick = () => {
    this.setState({
      value: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.value}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
}
