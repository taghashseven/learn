[
  `
  ## Redux 

### code example of using redux toolkit

- install the pack 
```bash
npm install @reduxjs/toolkit react-redux
```

- create slice
```javascript
// store.js
import { createSlice } from '@reduxjs/toolkit';

// Create a slice with initial state and reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
export const { increment, decrement } = counterSlice.actions;

```

- create store 
```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

```

- use store in component
```javascript
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store'; // Import the actions and the store

function App() {
  const counterValue = useSelector((state) => state.counter.value); // Select the counter value from the store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit Example</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{counterValue}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;

```
  `
]