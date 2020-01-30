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

export default EmployeeDetailsPage
