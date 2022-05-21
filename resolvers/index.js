const { getAllArticles, findArticleById, createArticle, deleteArticle, updateArticle } = require('./articles')

const { createComment, findComment, findCommentByIdArticle, updateCommentById, deleteCommentById } = require('./comments')


const resolvers = {
  Query: {
    getArticles: getAllArticles,
    findArticleById: findArticleById,

    findCommentById: findComment,
    findCommentByArticle: findCommentByIdArticle
  },

  Mutation : {
    // Article
    createArticle: createArticle,
    deleteArticle: deleteArticle,
    updateArticle: updateArticle,

    // comment
    createComment: createComment,
    updateComment: updateCommentById,
    deleteComment: deleteCommentById
  }
}

module.exports = resolvers;