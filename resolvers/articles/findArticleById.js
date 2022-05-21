const { Article } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const findArticleById = async (parent, { id }, context, info) => {


  const checkIdIsValid = ObjectID.isValid(id);

  if (!checkIdIsValid) {
    return "ID Article Not Valid!"
  }

  return await Article.findById(id)
}

module.exports = findArticleById;