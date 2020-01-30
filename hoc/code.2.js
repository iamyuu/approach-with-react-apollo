const EmployeeDetailsPage = props => {
  const { employee, loading, error } = props.data;

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ApiError error={error} />;
  }

  if (!employee) {
    return <NotFound />;
  }

  const { id } = props;

  return (
    <main>
      <ButtonEdit to={`/employee/edit/${id}`} />
      <ButtonDelete onClick={{/* We'll using mutation for handle it */}} />
      <Descriptions title="Employee Details" data={employee} />
    </main>
  );
}

export default compose(
  graphql(EMPLOYEE_DETAILS_QUERY, {
    options: props => ({ variables: { id: props.id } })
  }),
  graphql(REMOVE_EMPLOYEE_MUTATION, {
    name: 'removeEmployee',
    options: props => ({ variables: { id: props.id } })
  }),
)(EmployeeDetailsPage);
