import * as Apollo from 'react-apollo-hooks';
export * from 'react-apollo-hooks';

export const useQuery = () => {
  const defaultOptions = {
    suspend: true,
    ...options
  };

  // use the original hooks to run the query
  const result = Apollo.useQuery(query, defaultOptions);

  // if we have an API error, throw it!
  if (result.error) {
    throw result.error;
  }

  return result;
};
