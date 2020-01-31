import * as Apollo from 'react-apollo-hooks';
export * from 'react-apollo-hooks';

export const useQuery = (query, options) => {
  const result = Apollo.useQuery(query, options);
  return result;
};
