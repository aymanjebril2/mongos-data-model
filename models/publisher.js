const mongooos = require("mongoose");
const Schema = mongooos.Schema;
const Publisher = new Schema(
  {
    name: { type: String, require: true },
    location: { type: String, require: true },
    url: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongooos.model("publishers", Publisher);
