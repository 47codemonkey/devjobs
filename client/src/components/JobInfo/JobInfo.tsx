import React from 'react';
import { CSSProperties, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setJob } from 'src/store/jobs/jobSlice';
import { selectJobData } from 'src/store/jobs/jobSelectors.ts';
import { URL } from '../../store/jobs/jobAsyncActions';
import { RouteParams } from 'src/types/job.ts';

import './jobInfo.css';

export const JobInfo: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const dispatch = useDispatch();
  const job = useSelector(selectJobData);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(`${URL}/${id}`);
        dispatch(setJob(response.data));
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };
    fetchJobData();
  }, [dispatch, id]);

  return (
    <>
      <div className="job-wrapper">
        <div className="job-header">
          <div style={{ '--color': job.logoBackground } as CSSProperties} className="job-img">
            <img src={job.logo} alt="logo" />
          </div>
          <div className="company-info-wrapper">
            <div className="company-info">
              <div className="job-company-name">{job.company}</div>
              <div className="job-company-website">{job.website}</div>
            </div>
            <button className="company-site-btn">Company site</button>
          </div>
        </div>
        <div className="job-description-wrapper">
          <div className="job-info-wrapper">
            <div className="job-information-wrapper">
              <div className="job-information">
                <div>{job.postedAt}</div>
                <div className="dot">.</div>
                <div>{job.contract}</div>
              </div>
              <div className="job-position">{job.position}</div>
              <div className="job-location">{job.location}</div>
            </div>
            <div className="apply-now-btn-wrapper">
              <button className="apply-now-btn">Apply Now</button>
            </div>
          </div>
          <div className="job-description">{job.description}</div>
          <h2 className="job-description-title">Requirements:</h2>
          {job.requirements?.content && <div className="job-content">{job.requirements.content}</div>}
          <ul className="job-item">{job.requirements?.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
          <h2 className="job-description-title">Role:</h2>
          {job.role?.content && <div className="job-role-content">{job.role.content}</div>}
          <ul className="role-item">{job.role?.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
      </div>
      <footer className="footer-wrapper">
        <div className="footer-job-wrapper">
          <div>
            <div className="footer-job-position">{job.position}</div>
            <div className="footer-company-position">{job.company}</div>
          </div>
          <button className="footer-btn">Apply Now</button>
        </div>
      </footer>
    </>
  );
};
