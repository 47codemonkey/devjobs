import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobsData } from '../../store/jobs/jobSelectors';
import { fetchJobs, searchJobs } from '../../store/jobs/jobAsyncActions';
import { AppDispatch } from 'src/store';

export const useJobs = () => {
  const [search, setSearch] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const jobs = useSelector(selectJobsData);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleSearch = () => {
    if (search.trim()) {
      dispatch(searchJobs(search));
    }
  };

  const handleReset = () => {
    setSearch('');
    dispatch(fetchJobs());
  };

  return { search, setSearch, handleSearch, handleReset, jobs };
};

// export const useJobs = () => {
//   const [search, setSearch] = useState({ company: '', location: '', position: '' });
//   const dispatch: AppDispatch = useDispatch();
//   const jobs = useSelector(selectJobsData);
//
//   useEffect(() => {
//     dispatch(fetchJobs());
//   }, [dispatch]);
//
//   const handleSearch = () => {
//     dispatch(searchJobs(search));
//   };
//
//   return { search, setSearch, handleSearch, jobs };
// };

// import { setJobs } from '../../store/jobs/jobSlice';
// import { URL } from '../../store/jobs/jobAsyncActions';
// import axios from 'axios';
// import { QueryParams } from 'src/types/search.ts';

// const handleData = async () => {
//   try {
//     let url = URL;
//     const params: QueryParams = {};
//
//     if (query) {
//       params.search = query;
//     }
//
//     if (locationQuery) {
//       params.location = locationQuery;
//     }
//
//     const checkbox = document.getElementById('myCheckbox') as HTMLInputElement | null;
//     if (checkbox && checkbox.checked) {
//       params.contract = 'Full Time';
//     }
//
//     if (Object.keys(params).length > 0) {
//       url += '?' + new URLSearchParams(params).toString();
//     }
//
//     console.log('Requesting data from:', url);
//
//     const response = await axios.get(url);
//
//     console.log('Received data:', response.data);
//
//     dispatch(setJobs(response.data));
//   } catch (error) {
//     console.error('Error fetching filtered data:', error);
//     dispatch(setJobs([]));
//   }
// };
//
// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const newQuery = event.target.value;
//   setQuery(newQuery);
//
//   if (newQuery === '') {
//     dispatch(fetchJobs());
//   }
// };
//
// const handleLocationSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const newQuery = event.target.value;
//   setLocationQuery(newQuery);
//
//   if (newQuery === '') {
//     dispatch(fetchJobs());
//   }
// };

// const [query, setQuery] = useState('');
// const [locationQuery, setLocationQuery] = useState('');
