import * as Apollo from '@apollo/react-hooks';
export * from '@apollo/react-hooks';

export const useQuery = (query, options) => {
  const result = Apollo.useQuery(query, options);

  if (result.error) {
    throw result.error;
  }

  return result;
};
