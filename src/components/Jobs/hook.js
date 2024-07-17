import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobsData } from '../../store/jobs/jobSelectors';
import { fetchJobs } from '../../store/jobs/jobAsyncActions';
import axios from 'axios';
import { setJobs } from '../../store/jobs/jobSlice';
import { URL } from '../../store/jobs/jobAsyncActions';

export const useJobs = () => {
  const [query, setQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const dispatch = useDispatch();
  const jobs = useSelector(selectJobsData);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleData = async () => {
    try {
      let url = URL;

      const params = {};

      if (query) {
        params.search = query;
      }

      if (locationQuery) {
        params.location = locationQuery;
      }

      const fullTimeOnly = document.getElementById('myCheckbox').checked;
      if (fullTimeOnly) {
        params.contract = 'Full Time';
      }

      if (Object.keys(params).length > 0) {
        url += '?' + new URLSearchParams(params).toString();
      }

      console.log('Fetching data with URL:', url); // Log the URL for debugging

      const response = await axios.get(url);
      dispatch(setJobs(response.data));
    } catch (error) {
      console.error('Error fetching filtered data:', error);
      dispatch(setJobs([]));
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery === '') {
      dispatch(fetchJobs());
    }
  };

  const handleLocationSearch = (event) => {
    event.preventDefault();
    const newQuery = event.target.value;
    setLocationQuery(newQuery);
    if (newQuery === '') {
      dispatch(fetchJobs());
    }
  };

  return { query, locationQuery, handleLocationSearch, handleChange, handleData, jobs };
};
