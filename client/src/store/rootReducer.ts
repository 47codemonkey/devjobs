import { combineReducers } from '@reduxjs/toolkit';

import jobsReducer from 'src/store/jobs/jobSlice.ts';
import themeReducer from 'src/store/toggleTheme/toggleThemeSlice.ts';

const rootReducer = combineReducers({
  jobsReducer,
  themeReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
