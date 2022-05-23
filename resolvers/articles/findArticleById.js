const { Article } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const findArticleById = async (parent, { id }, context, info) => {


  const checkIdIsValid = ObjectID.isValid(id);

  if (!checkIdIsValid) {
    return "ID Article Not Valid!"
  }

  const checkExistArticle = await Article.findById(id);

  if (!checkExistArticle) {
    return "Data does not exist"
  }

  return checkExistArticle
}

module.exports = findArticleById;