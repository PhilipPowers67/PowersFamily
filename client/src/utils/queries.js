import { gql } from "@apollo/client";

export const QUERY_SAUCES = gql`
  query getSauces($category: ID) {
    sauces(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($sauces: [ID]!) {
    checkout(sauces: $sauces) {
      session
    }
  }
`

export const QUERY_ALL_SAUCES = gql`
  {
    sauces {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        sauces {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      orders {
        sauces {
          _id
          category
        }
      }
    }
  }
`;
