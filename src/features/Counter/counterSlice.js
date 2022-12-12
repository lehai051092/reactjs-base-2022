const {createSlice} = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    }
  }
});

const {actions, reducers} = counterSlice;
export const {increase, decrease} = actions; // export name
export default reducers;