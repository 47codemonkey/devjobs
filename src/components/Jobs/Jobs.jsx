import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobsData } from '../../store/jobs/jobSelectors';
import { fetchJobs } from '../../store/jobs/jobAsyncActions';
import { setJobs } from '../../store/jobs/jobSlice';
import { Link } from 'react-router-dom';
import { IconSearch } from '../../assets/desktop/icons/IconSearch';
import { IconLocation } from '../../assets/desktop/icons/IconLocation';

import '../JobsList/jobsList.css';
import '../Search/search.css';

const URL = 'https://6610fce60640280f219de13f.mockapi.io/jobs';

export const Jobs = () => {
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

  return (
    <>
      <div className="search-wrapper">
        <div className="search-form-wrapper">
          <div className="search-input-wrapper">
            <IconSearch />
            <input
              className="search-input"
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Filter by title, companies, expertise..."
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

      <div className="jobs-wrapper">
        <ul className="jobs-list">
          {jobs.map(({ postedAt, position, logo, location, id, company, contract, logoBackground }) => (
            <li key={id} className="job">
              <Link to={`/job/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ '--color': logoBackground }} className="image-logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="job-info">
                  <div>{postedAt}</div>
                  <div className="dot">.</div>
                  <div>{contract}</div>
                </div>
                <div className="position-name">{position}</div>
                <div className="company-name">{company}</div>
                <div className="location-name">{location}</div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="btn-wrapper">
          <button className="load-more-btn">Load More</button>
        </div>
      </div>
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
