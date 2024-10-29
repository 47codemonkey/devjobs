import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL = 'http://localhost:3000';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    throw Error('Error fetching jobs');
  }
});

// export const searchJobs = createAsyncThunk(
//   'jobs/searchJobs',
//   async (searchParams: { company?: string; location?: string; position?: string }) => {
//     try {
//       const response = await axios.get(`${URL}/search`, { params: searchParams });
//       return response.data;
//     } catch (error) {
//       throw Error('Error fetching jobs');
//     }
//   },
// );

export const searchJobs = createAsyncThunk('jobs/searchJobs', async (keyword: string) => {
  try {
    if (!keyword.trim()) {
      throw new Error('Keyword cannot be empty');
    }

    const response = await axios.get(`${URL}/search`, { params: { keyword } });
    return response.data;
  } catch (error) {
    throw Error('Error fetching jobs');
  }
});
