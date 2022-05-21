const { Comment } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const updateComment = async (parent, args, context, info) => {
  const { id } = args;
  const { name, comment } = args.update;

  const checkIdIsValid = ObjectID.isValid(id);

  if (!checkIdIsValid) {
    return "ID Article Not Valid!"
  }

  await Comment.findByIdAndUpdate(id, 
    {
      name,
      comment,
      updateAt: Date.now()
    },
    { new: true }
  )

  return "Update Article Successfully!"
}

module.exports = updateComment;


