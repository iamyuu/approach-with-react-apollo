const EmployeeDetailsPage = props => {
  const { id } = props;

  const removeEmployee = useMutation(REMOVE_EMPLOYEE_MUTATION);
  const { loading, error, data } = useQuery(EMPLOYEE_DETAILS_QUERY, {
    variables: { id }
  });

  return (
    <main>
      <ButtonEdit to={`/employee/edit/${id}`} />
      <ButtonDelete onClick={{/* We'll using mutation for handle it */}} />
      <Descriptions title="Employee Details" data={{/* We'll using data from graphql */}} />
    </main>
  );
}

export default EmployeeDetailsPage
