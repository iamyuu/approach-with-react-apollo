const App = () => (
  <ApolloProvider client={client}>
    <Suspense fallback={<LoadingIndicator />}>
      <ErrorBoundary>
        <Application />
      </ErrorBoundary>
    </Suspense>
  </ApolloProvider>
);
