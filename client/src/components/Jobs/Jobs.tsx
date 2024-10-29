import React from 'react';
import { Search } from '../Search/Search';
import { JobsList } from '../JobsList/JobsList';

import { useJobs } from './hook';

export const Jobs: React.FC = () => {
  const { search, setSearch, handleSearch, jobs } = useJobs();

  return (
    <>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      <JobsList jobs={jobs} />
    </>
  );
};

// const handleData = async () => {
//   try {
//     if (query) {
//       const response = await axios.get(`${URL}?search=${encodeURIComponent(query)}`);
//       dispatch(setJobs(response.data));
//     } else if (locationQuery) {
//       const response = await axios.get(URL, { params: { location: locationQuery } });
//       dispatch(setJobs(response.data));
//     }
//   } catch (error) {
//     console.error('Error fetching filtered data:', error);
//     dispatch(setJobs([]));
//   }
// };

// Some issues with combined 1st and 2nd issue values
