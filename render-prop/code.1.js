const EmployeeDetailsPage = props => (
  <Query query={EMPLOYEE_DETAILS_QUERY} variables={{ id: props.id }}>
    {({ loading, error, data }) => (
      <Mutation mutation={REMOVE_EMPLOYEE_MUTATION} variables={{ id: props.id }}>
        {removeEmployee => {
          return (
            <main>
              <ButtonEdit to={`/employee/edit/${id}`} />
              <ButtonDelete onClick={{/* We'll using mutation for handle it */}} />
              <Descriptions title="Employee Details" data={{/* We'll using data from graphql */}} />
            </main>
          )
        }}
      </Mutation>
    )}
  </Query>
);

export default EmployeeDetailsPage
