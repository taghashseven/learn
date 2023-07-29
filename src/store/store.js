// store.js
import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './stateSlice';

const store = configureStore({
  reducer: {
    navState: stateReducer,
  },
});



export default store;
