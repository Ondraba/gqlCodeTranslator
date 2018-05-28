import gql from "graphql-tag";

export default gql`
  {
    phrases {
      _id
      phrase
      translation
    }
  }
`;