const { Comment } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const findCommentById = async (parent, { id }, context, info) => {
  try {

    const checkIdIsValid = ObjectID.isValid(id);

    if (!checkIdIsValid) {
      return "ID Article Not Valid!"
    }

    return await Comment.findById(id)
  } catch (error) {
    return error.errors
  }
  
}

module.exports = findCommentById;