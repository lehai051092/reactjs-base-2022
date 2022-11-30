import React from 'react';
import PropTypes from 'prop-types';
import ClockFeature from "../Clock";

HomeFeature.propTypes = {};

function HomeFeature(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <ClockFeature/>
    </div>
  );
}

export default HomeFeature;