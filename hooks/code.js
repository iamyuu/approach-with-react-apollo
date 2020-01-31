const EmployeeDetailsPage = props => {
  const { id } = props;

  // Mutation Hooks
  const removeEmployee = useMutation(REMOVE_EMPLOYEE_MUTATION);
  // Query Hooks
  const { loading, error, data } = useQuery(EMPLOYEE_DETAILS_QUERY, {
    variables: { id }
  });

  const { employee } = data;

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

  // The rendered result
  return (
    <main>
      <ButtonEdit to={`/employee/edit/${id}`} />
      <ButtonDelete onClick={removeEmployee({ variables: { id } })} />
      <Descriptions title="Employee Details" data={employee} />
    </main>
  );
}

export default EmployeeDetailsPage
