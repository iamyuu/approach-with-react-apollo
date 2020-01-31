const EmployeeDetailsPage = props => (
  <Query query={EMPLOYEE_DETAILS_QUERY} variables={{ id: props.id }}>
    {({ loading, error, data }) => (
      <Mutation mutation={REMOVE_EMPLOYEE_MUTATION} variables={{ id: props.id }}>
        {removeEmployee => {
          const { employee } = data;

          if (loading) {
            return <LoadingIndicator />;
          }

          if (error) {
            return <ApiError error={error} />;
          }

          if (!employee) {
            return <NotFound />;
          }

          return (
            <main>
              <ButtonEdit to={`/employee/edit/${id}`} />
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
