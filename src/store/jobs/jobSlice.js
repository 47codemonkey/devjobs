import { createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from './jobAsyncActions';

const initialState = {
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
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.jobs = [];
      });
  },
});

export const { setJobs } = jobSlice.actions;
export default jobSlice.reducer;
