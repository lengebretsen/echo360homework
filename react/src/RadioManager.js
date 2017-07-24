import React, { Component } from 'react';

import Radio from './Radio'
import Reset from './Reset'
import ValueDisplay from './ValueDisplay'

import './RadioManager.css';


class RadioManager extends Component{
  constructor(props) {
    super(props);
    this.state = { value:'', selectedOption:'' };

    this.handleRadioClick = this.handleRadioClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
  }

  handleRadioClick(clickDetails) {
    this.setState({value:clickDetails.value, selectedOption:clickDetails.name});
  }

  handleResetClick() {
    this.setState({value:'', selectedOption:''});
  }

  render() {
    const value = this.state.value
    const selectedOption = this.state.selectedOption
    const options = this.props.options

    return(
      <div className='radioManager'>
        <Radio onRadioClick={this.handleRadioClick}
          options={options}
          selectedOption={selectedOption}
        />
        <ValueDisplay selectedValue={value} />
        <Reset onResetClick={this.handleResetClick}/>
      </div>
    );
  }
}

export default RadioManager
