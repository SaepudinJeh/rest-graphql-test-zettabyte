const { Article } = require('../../models')

const getArticles = async (parent, { page }, context, info) => {
  try {
    const option = {
      page: page === 0 || '' ? 1 : page,
      limit: 10,
      sort: ({ createdAt: 'desc' })
    }

    const result = await Article.paginate({}, option)

    return result.docs
    
  } catch (error) {
    return error;
  }
} 

module.exports = getArticles;