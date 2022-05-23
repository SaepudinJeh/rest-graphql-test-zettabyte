const { gql } = require('apollo-server-express');

const typeDefs = gql `

  type Article {
    id: ID!,
    title: String!,
    description: String!,
    createdAt: String,
    updatedAt: String,
  }

  type Comment {
    id: ID!,
    idArticle: String!,
    name: String!,
    comment: String!,
    createdAt: String,
    updatedAt: String
  }

  type Query {
    getArticles(page: Int): [Article]

    findArticleById(id: ID) : Article

    findCommentById(id: ID) : Comment
    findCommentByArticle(idArticle: String) : [Comment]
  }

  input createArticleInput {
    title: String,
    description: String
  }

  input createCommentInput {
    idArticle: String,
    name: String,
    comment: String
  }

  type Mutation {
    # article
    createArticle(post:createArticleInput) : String
    deleteArticle(id: ID) : String
    updateArticle(id: ID, update: createArticleInput) : String

    # comment
    createComment(comment: createCommentInput) : String
    updateComment(id: ID, update: createCommentInput) : String
    deleteComment(id: ID) : String
  }
`;

module.exports = typeDefs;