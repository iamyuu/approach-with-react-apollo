import * as Apollo from 'react-apollo-hooks';
export * from 'react-apollo-hooks';

export const useQuery = (query, options) => {
  // use the original hooks to run the query
  const result = Apollo.useQuery(query, {
    suspend: true,
    ...options
  });

  // if we have an API error, throw it!
  if (result.error) {
    throw result.error;
  }

  return result;
};
