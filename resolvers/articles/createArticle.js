const { Article } = require("../../models");

const createArticle = async (parent, args, context, info) => {
  const { title, description } = args.post;

  const postArticle = new Article({ title, description });

  await postArticle.save();

  return "Create Article Successfully :)"
}

module.exports = createArticle;