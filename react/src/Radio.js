import React, { Component } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onRadioClick({value:event.target.value, name:event.target.name});
  }

  generateInputs(options) {
    return options.map((option) =>
        <label key={option.value}>
          <input type="radio"
            name={option.label}
            value={option.value}
            onClick={this.handleClick}
            checked={this.props.selectedOption === option.label}/>
            {option.label}
        </label>
    );
  }

  render() {
    var inputs = this.generateInputs(this.props.options)
    return(
      <div className='radioContainer'>
        {inputs}
      </div>
    );
  }
}

export default Radio
