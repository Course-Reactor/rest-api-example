const mongoose = require("mongoose");

mongoose.connect("mongodb://root:password@localhost/movies?authSource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const entrySchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model("Movie", entrySchema);
