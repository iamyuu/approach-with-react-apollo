import * as Apollo from '@apollo/react-hooks';
export * from '@apollo/react-hooks';

export const useQuery = (query, options) => {
  const result = Apollo.useQuery(query, options);
  return result;
};
