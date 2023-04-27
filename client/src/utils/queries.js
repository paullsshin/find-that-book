import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      username
      email
      password
      savedBooks {
        authors
        description
        title
        bookId
        link
        image
      }
    }
  }
`;
