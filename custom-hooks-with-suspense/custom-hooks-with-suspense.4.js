import * as Apollo from 'react-apollo-hooks';
export * from 'react-apollo-hooks';

export const useQuery = (query, options) => {
  const result = Apollo.useQuery(query, {
    suspend: true,
    ...options
  });

  if (result.error) {
    throw result.error;
  }

  return result;
};
