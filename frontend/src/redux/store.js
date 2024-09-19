// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import countrySearchReducer from './countrySearchSlice';

const store = configureStore({
  reducer: {
    countrySearch: countrySearchReducer,
   
  },
});

export default store;
