import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://6610fce60640280f219de13f.mockapi.io/jobs';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw Error('Error fetching jobs');
  }
});
