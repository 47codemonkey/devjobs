import { RootStateType } from 'src/store/rootReducer.ts';

export const selectJobsData = ({ jobsReducer }: RootStateType) => jobsReducer.jobs;
export const selectJobData = ({ jobsReducer }: RootStateType) => jobsReducer.job;
