const mongoose = require('mongoose');
const mongoosePagination = require('mongoose-paginate-v2')

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
}, { timestamps: true })

articleSchema.plugin(mongoosePagination)

const Article = mongoose.model('Articles', articleSchema);

module.exports = Article;