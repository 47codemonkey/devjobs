const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  id: String,
  company: String,
  logo: String,
  logoBackground: String,
  position: String,
  postedAt: String,
  contract: String,
  location: String,
  website: String,
  apply: String,
  description: String,
  requirements: {
    content: String,
    items: [{ type: String }],
  },
  role: {
    content: String,
    items: [{ type: String }],
  },
});

const DataModel = mongoose.model('jobs', DataSchema);
module.exports = DataModel;
