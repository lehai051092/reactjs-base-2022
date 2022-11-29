import React, {useState} from 'react';
import PropTypes from 'prop-types';

CounterFeature.propTypes = {

};

function CounterFeature(props) {
  const [getCount, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      {getCount}
      <button onClick={() => {setCount(x => x + 1)}}>Increase</button>
    </div>
  );
}

export default CounterFeature;