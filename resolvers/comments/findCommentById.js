const { Comment } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const findCommentById = async (parent, { id }, context, info) => {
  try {

    const checkIdIsValid = ObjectID.isValid(id);

    if (!checkIdIsValid) {
      return "ID Article Not Valid!"
    }

    const checkDataExist =  await Comment.findById(id);

    if (!checkDataExist) {
      return "Data does not exist"
    }

    return await Comment.findById(id)
  } catch (error) {
    return error.errors
  }
  
}

module.exports = findCommentById;