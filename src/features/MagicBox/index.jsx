import React from 'react';
import './styles.scss';

MagicBoxFeature.propTypes = {};

function MagicBoxFeature(props) {
  // const color = useMagicBox();

  return (
    <div>
      <h2>React Hook - Use Magic Box</h2>
      <div
        className="magic-box"
        style={{backgroundColor: "red"}}
      >

      </div>
    </div>
  );
}

export default MagicBoxFeature;