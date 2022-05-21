const { Comment, Article } = require("../../models");
const ObjectID = require('mongodb').ObjectId;

const createComment = async (parent, args, context, info) => {
  try {
    const { idArticle, name, comment } = args.comment;

    const checkIdIsValid = ObjectID.isValid(idArticle);

    if (!checkIdIsValid) {
      return "ID Article Not Valid!"
    }
    
    const findArticle = await Article.findById(idArticle);

    if (!findArticle) {
      return "Article Not Found!"
    } 


    const saveComment = new Comment({ idArticle, name, comment })

    await saveComment.save()

    return "Comment Successfully :)"


  } catch (error) {
    return error;
  }
}


module.exports = createComment;