const EmployeeDetailsPage = props => {
  const { id } = props;

  const removeEmployee = useMutation(REMOVE_EMPLOYEE_MUTATION);
  const { data } = useQuery(EMPLOYEE_DETAILS_QUERY, {
    variables: { id }
  });

  const { employee } = data;

  if (!data || !employee) {
    throw new Error('Employee Not Found');
  }

  return (
    <main>
      <ButtonEdit to={`/employee/edit/${id}`} />
      <ButtonDelete onClick={removeEmployee({ variables: { id } })} />
      <Descriptions title="Employee Details" data={employee} />
    </main>
  );
}

export default EmployeeDetailsPage
