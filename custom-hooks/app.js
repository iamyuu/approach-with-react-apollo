const App = () => (
  <ApolloProvider client={client}>
    <ErrorBoundary>
      <Application />
    </ErrorBoundary>
  </ApolloProvider>
);
