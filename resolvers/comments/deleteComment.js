const { Comment } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const deleteComment = async (parent, { id }, context, info) => {
  try {

    const checkIdIsValid = ObjectID.isValid(id);

    if (!checkIdIsValid) {
      return "ID Article Not Valid!"
    }

    const checkDataExist =  await Comment.findById(id);

    if (!checkDataExist) {
      return "Data does not exist"
    }

    await Comment.findByIdAndDelete(id);

    return "Delete comment successfully";
  } catch (error) {
    return error;
  }
}

module.exports = deleteComment;