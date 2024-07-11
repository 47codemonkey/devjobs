import { combineReducers } from '@reduxjs/toolkit';

import jobsReducer from './jobs/jobSlice';

const rootReducer = combineReducers({
  jobsReducer,
});

export default rootReducer;
