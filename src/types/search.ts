import React from 'react';

export type QueryParams = {
  search?: string;
  location?: string;
  contract?: string;
};

export type SearchProps = {
  handleData: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
  locationQuery: string;
};
