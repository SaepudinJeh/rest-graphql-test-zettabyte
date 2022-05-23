const { Article, Comment } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const deleteArticle = async (parent, { id }, context, info) => {
  const checkIdIsValid = ObjectID.isValid(id)

  if (!checkIdIsValid) {
    return "ID Article Not Valid";
  }

  const checkExistArticle = await Article.findById(id);

  if (!checkExistArticle) {
    return "Data does not exist"
  }

  // delete article and all comments
  await Article.findByIdAndDelete(id)
  await Comment.deleteMany({ idArticle: id })

  return "Delete Article Successfully";
};

module.exports = deleteArticle;