import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducers';

// Create a Redux store instance
const store = configureStore({
  reducer: rootReducer,
});

export default store;
