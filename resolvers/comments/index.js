const createComment = require('./createComment')
const findComment = require('./findCommentById')
const findCommentByIdArticle = require('./findCommentByIdArticle')
const updateCommentById = require('./updateComment')
const deleteCommentById = require('./deleteComment');

module.exports = {
  createComment,
  findComment,
  findCommentByIdArticle,
  updateCommentById,
  deleteCommentById
}