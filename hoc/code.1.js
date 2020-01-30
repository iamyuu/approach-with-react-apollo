const EmployeeDetailsPage = props => {
  const { id } = props;

  return (
    <main>
      <ButtonEdit to={`/employee/edit/${id}`} />
      <ButtonDelete onClick={{/* We'll using mutation for handle it */}} />
      <Descriptions title="Employee Details" data={{/* We'll using data from graphql */}} />
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
