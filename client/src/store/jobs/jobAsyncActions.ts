import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL = 'http://localhost:3000/getJobs';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw Error('Error fetching jobs');
  }
});
