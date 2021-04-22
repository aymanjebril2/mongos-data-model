const mongooos = require("mongoose");
const publisher = require("./publisher");
const Schema = mongooos.Schema;
const Book = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    published_date: { type: String, require: true },
    publisher_id: { type: Schema.Types.ObjectId, ref: "publishers_id" },
  },
  { timestamps: true }
);

module.exports = mongooos.model("book", Book);
