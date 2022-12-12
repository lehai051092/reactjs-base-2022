import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrease, increase} from "./counterSlice";

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter);

  const handleIncreaseClick = () => {
    dispatch(increase());
  };

  const handleDecreaseClick = () => {
    dispatch(decrease());
  };

  return (
    <div>
      <h2>Counter Redux {count}</h2>
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;