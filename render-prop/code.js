const EmployeeDetailsPage = props => (
  // Query results, provided by render callbacks
  <Query query={EMPLOYEE_DETAILS_QUERY} variables={{ id: props.id }}>
    {({ loading, error, data }) => (
      // Mutation functions, provided by render callbacks
      <Mutation mutation={REMOVE_EMPLOYEE_MUTATION}>
        {removeEmployee => {
          // Loading and error state loading
          if (loading) {
            return <LoadingIndicator />;
          }

          if (error) {
            return <ApiError error={error} />;
          }

          if (!employee) {
            return <NotFound />;
          }

          const { employee } = data;

          // The rendered result
          return (
            <main>
              <ButtonEdit to={`/employee/edit/${props.id}`} />
              <ButtonDelete onClick={removeEmployee} />
              <Descriptions title="Employee Details" data={employee} />
            </main>
          )
        }}
      </Mutation>
    )}
  </Query>
);

export default EmployeeDetailsPage
