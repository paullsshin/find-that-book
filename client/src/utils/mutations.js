import { gql } from "@apollo/client";
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($book: BookData!) {
    saveBook(book: $book) {
      token
      user {
        _id
        email
        savedBooks {
          authors
          description
          bookId
          title
          link
          image
        }
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      token
      user {
        _id
        email
        savedBooks {
          authors
          description
          bookId
          title
          link
          image
        }
      }
    }
  }
`;
