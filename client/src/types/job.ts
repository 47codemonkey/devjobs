export type JobsStateType = {
  jobs: [];
  search: [];
  job: {
    logo: string;
    logoBackground: string;
    company: string;
    website: string;
    position: string;
    contract: string;
    postedAt: string;
    location: string;
    description: string;
    requirements?: {
      content: string;
      items: string[];
    };
    role?: {
      content: string;
      items: string[];
    };
  };
  status: string;
  loading: boolean;
};

export type Job = {
  id: number;
  postedAt: string;
  position: string;
  logo: string;
  location: string;
  company: string;
  contract: string;
  logoBackground: string;
};

export type JobsListProps = {
  jobs: Job[];
};

export type RouteParams = {
  id: string;
};
