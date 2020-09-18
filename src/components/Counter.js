import React from 'react';
import PropTypes from 'prop-types';

export function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={function () { props.onChange(-1); }}> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={function () { props.onChange(+1); }}> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
  //  initialScore: PropTypes.number.isRequired    // setting the initial player score stated in the PLAYERS array

};
