import { createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from './jobAsyncActions';
import { searchJobs } from './jobAsyncActions';
import type { PayloadAction } from '@reduxjs/toolkit';
import { JobsStateType } from 'src/types/job.ts';

const initialState: JobsStateType = {
  jobs: [],
  search: [],
  job: {
    logo: '',
    logoBackground: '',
    company: '',
    website: '',
    position: '',
    contract: '',
    postedAt: '',
    location: '',
    description: '',
    requirements: {
      content: '',
      items: [],
    },
    role: {
      content: '',
      items: [],
    },
  },
  status: 'idle',
  loading: false,
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action) {
      state.jobs = action.payload;
    },
    setJob(state, action) {
      state.job = action.payload;
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
      .addCase(searchJobs.fulfilled, (state, action) => {
        console.log('state action', action.payload);
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.status = 'failed';
        state.jobs = [];
      });
  },
});

export const { setJobs, setJob } = jobSlice.actions;
export default jobSlice.reducer;
