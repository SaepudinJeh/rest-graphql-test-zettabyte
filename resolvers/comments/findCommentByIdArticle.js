const { Comment } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const findCommentByIdArticle = async (parent, args, context, info) => {
  try {
    const { idArticle } = args

    const checkIdIsValid = ObjectID.isValid(idArticle);

    if (!checkIdIsValid) {
      return "ID Article Not Valid!"
    }

    const option = {
      limit: 10,
      sort: ({ createdAt: 'desc' })
    }

    const result = await Comment.paginate({ idArticle }, option);

    if (!result) {
      return "Comment Empty!"
    }

    return result.docs

  } catch (error) {
    return error
  }
  
}

module.exports = findCommentByIdArticle;