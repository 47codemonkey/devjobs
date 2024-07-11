import { Header } from '../../components/Header/Header';
import { Search } from '../../components/Search/Search';
import { JobsList } from '../../components/JobsList/JobsList';
import { fetchJobs } from '../../store/jobs/jobAsyncActions';
import { selectJobsData } from '../../store/jobs/jobSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const HomePage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobsData);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <>
      <Header />
      <Search />
      {jobs ? <JobsList data={jobs} /> : <p>Loading...</p>}
    </>
  );
};
