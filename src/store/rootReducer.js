import { combineReducers } from '@reduxjs/toolkit';

import jobSlice from './jobs/jobSlice';

const rootReducer = combineReducers({
  jobSlice,
});

export default rootReducer;
