const { Article } = require("../../models")
const ObjectID = require('mongodb').ObjectId;


const updateArticle = async (parent, args, context, info) => {
  const { id } = args;
  const { title, description } = args.update;

  const checkIdIsValid = ObjectID.isValid(id);

  if (!checkIdIsValid) {
    return "ID Article Not Valid!"
  }

  await Article.findByIdAndUpdate(id, 
    {
      title,
      description,
      updateAt: Date.now()
    },
    { new: true }
  )

  return "Update Article Successfully!"
}

module.exports = updateArticle;


