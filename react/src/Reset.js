import React, { Component } from 'react';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onResetClick();
  }

  render() {
    return(
      <div className='resetContainer'>
        <button className='resetButton' onClick={this.handleClick}>reset</button>
      </div>
    );
  }
}

export default Reset
