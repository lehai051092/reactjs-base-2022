import counterSliceReducer from "../features/Counter/counterSlice";

const {configureStore} = require("@reduxjs/toolkit");

const rootReducer = {
  counter: counterSliceReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;