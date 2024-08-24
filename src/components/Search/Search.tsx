import React from 'react';
import { IconSearch } from '../../assets/desktop/icons/IconSearch';
import { IconLocation } from '../../assets/desktop/icons/IconLocation';
import { SearchProps } from 'src/types/search.ts';
import './search.css';

export const Search: React.FC<SearchProps> = ({
  handleData,
  handleChange,
  handleLocationSearch,
  query,
  locationQuery,
}) => {
  return (
    <div className="search-wrapper">
      <div className="search-form-wrapper">
        <div className="search-input-wrapper">
          <IconSearch />
          <input
            className="search-input"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={query ? '' : 'Filter by title, companies, expertise...'}
          />
        </div>
        <div className="location-input-wrapper">
          <IconLocation />
          <input
            className="location-input"
            type="text"
            value={locationQuery}
            onChange={handleLocationSearch}
            placeholder="Filter by location..."
          />
        </div>
        <div className="search-btn-wrapper">
          <input className="checkbox-input" type="checkbox" id="myCheckbox" name="" />
          <label className="label-name" htmlFor="myCheckbox">
            Full Time Only
          </label>
          <button className="search-btn" onClick={handleData}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//
// import { IconSearch } from '../../assets/desktop/icons/IconSearch';
// import { IconLocation } from '../../assets/desktop/icons/IconLocation';
// import { JobsList } from '../JobsList/JobsList';
// import './search.css';
//
// const URL = 'https://6610fce60640280f219de13f.mockapi.io/jobs';
//
// export const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [locationText, setLocationText] = useState('');
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//
//   const handleSearchA = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(URL);
//       setJobs(response.data);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearchA();
//   };
//
//   const handleSearch = (event) => {
//     setJobs([]);
//     setSearchTerm(event.target.value);
//   };
//
//   let filteredData = jobs.filter((item) => {
//     const matchSearchTerm1 =
//       item.contract.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.position.toLowerCase().includes(searchTerm.toLowerCase());
//
//     const matchSearchTerm2 = item.location.toLowerCase().includes(locationText.toLowerCase());
//
//     return matchSearchTerm1 && matchSearchTerm2;
//   });
//
//   const handleLocation = (e) => {
//     setJobs([]);
//     setLocationText(e.target.value);
//   };
//
//   return (
//     <div className="search-wrapper">
//       <form className="search-form-wrapper" onSubmit={handleSubmit}>
//         <div className="search-input-wrapper">
//           <IconSearch />
//           <input
//             className="search-input"
//             type="text"
//             value={searchTerm}
//             onChange={handleSearch}
//             placeholder="Filter by title, companies, expertise..."
//           />
//         </div>
//         <div className="location-input-wrapper">
//           <IconLocation />
//           <input
//             className="location-input"
//             type="text"
//             value={locationText}
//             onChange={handleLocation}
//             placeholder="Filter by location..."
//           />
//         </div>
//         <div className="search-btn-wrapper">
//           <button className="search-btn" type="submit">
//             Search
//           </button>
//         </div>
//       </form>
//       {loading ? <p>Loading...</p> : <JobsList data={filteredData} />}
//     </div>
//   );
// };
