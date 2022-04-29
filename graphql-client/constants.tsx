import { gql } from "graphql-request";

const getAllPeopleQuery = gql`
  query {
    getAllPeople {
      id
      name
    }
  }
`;
const addPersonMutation = gql`
  mutation addPeople($name: String!) {
    addPerson(name: $name) {
      id
      name
    }
  }
`;
export { getAllPeopleQuery, addPersonMutation };
