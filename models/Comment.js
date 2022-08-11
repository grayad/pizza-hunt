const { Schema, model } = require("mongoose");
const { schema } = require("./Pizza");

const CommentSchema = new Schema({
  writtenBy: {
    type: String,
  },
  commentBody: {
    type: String,
  },
  createdBy: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
