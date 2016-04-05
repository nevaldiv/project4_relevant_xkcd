var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var comicSchema = new mongoose.Schema({
  title:       { type: String, default: "" },
  num:         { type: Number },
  img:         { type: String },
  // img:         { type: String, default: "/images/notfound2.gif" },
  description: { type: String, default: "" },

});

var Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
