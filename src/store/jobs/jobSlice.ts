import { createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from './jobAsyncActions';
import type { PayloadAction } from '@reduxjs/toolkit';
import { JobStateType } from 'src/types/job.ts';

const initialState: JobStateType = {
  jobs: [],
  status: 'idle',
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
        state.jobs = [];
      })
      .addCase(fetchJobs.fulfilled, (state, action: PayloadAction<[]>) => {
        state.status = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.status = 'failed';
        state.jobs = [];
      });
  },
});

export const { setJobs } = jobSlice.actions;
export default jobSlice.reducer;
