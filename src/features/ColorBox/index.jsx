import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function ColorBox(props) {
  const [getColor, setColor] = useState('white');

  return (
    <div>
      <h2>Color Box</h2>
      {getColor}
      <button onClick={() => {setColor(x => x = 'black')}}>Black</button>
      <button onClick={() => {setColor(x => x = 'white')}}>White</button>
    </div>
  );
}

export default ColorBox;