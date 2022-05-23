const { Comment } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const updateComment = async (parent, args, context, info) => {
  const { id } = args;
  const { name, comment } = args.update;

  const checkIdIsValid = ObjectID.isValid(id);

  if (!checkIdIsValid) {
    return "ID Article Not Valid!"
  }

  const checkDataExist =  await Comment.findById(id);

    if (!checkDataExist) {
      return "Data does not exist"
    }

  await Comment.findByIdAndUpdate(id, 
    {
      name,
      comment
    },
    { new: true }
  )

  return "Update Article Successfully!"
}

module.exports = updateComment;


