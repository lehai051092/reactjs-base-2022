import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import useClock from "../../hooks/useClock";

ClockFeature.propTypes = {};

function ClockFeature(props) {
  const dateString = useClock();

  return (
    <div>
      <h2>React Hook - Use Effect Clock</h2>
      <div className="clock">
        <p className="clock__time">{dateString}</p>
      </div>
    </div>
  );
}

export default ClockFeature;