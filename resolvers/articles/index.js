const createArticle = require('./createArticle');
const deleteArticle = require('./deleteArticle');
const updateArticle = require('./updateArticle')
const getAllArticles =  require('./getArticles');
const findArticleById = require('./findArticleById')

module.exports = {
  createArticle,
  deleteArticle,
  updateArticle,
  getAllArticles,
  findArticleById
}