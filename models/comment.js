const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2')

const { Schema } = mongoose;

const commentSchema = new Schema({
  idArticle: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
}, { timestamps: true })

commentSchema.plugin(mongoosePagination)

const article = mongoose.model('Comments', commentSchema);


module.exports = article;