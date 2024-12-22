
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Reducer/UserReducer.js';

export const store = configureStore({
  reducer: {UserReducer},
})