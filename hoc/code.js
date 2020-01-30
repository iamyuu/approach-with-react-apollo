const EmployeeDetailsPage = props => {
  // Query results, injected by the query HOC
  const { employee, loading, error } = props.data;

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

  // Mutation functions, injected by the mutation HOCs
  const { id, removeEmployee } = props;

  // The rendered result
  return (
    <main>
      <ButtonEdit to={`/employee/edit/${id}`} />
      <ButtonDelete onClick={removeEmployee} />
      <Descriptions title="Employee Details" data={employee} />
    </main>
  );
}

export default compose(
  // Query HOC
  graphql(EMPLOYEE_DETAILS_QUERY, {
    options: props => ({ variables: { id: props.id } })
  }),
  // Mutation HOCs
  graphql(REMOVE_EMPLOYEE_MUTATION, {
    name: 'removeEmployee',
    options: props => ({ variables: { id: props.id } })
  }),
)(EmployeeDetailsPage);
