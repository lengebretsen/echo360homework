import React from 'react';

const ValueDisplay = (props) => {
  return (
    <div className="valueDisplay">
      <div className="valueLabel"> you have selected </div> <div className="selectedValue">{props.selectedValue}</div>
    </div>
  );
}

export default ValueDisplay
