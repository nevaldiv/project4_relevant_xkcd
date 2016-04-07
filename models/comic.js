var mongoose = require('mongoose'),
    User     = require("./user.js"),
    debug    = require('debug')('app:models');

var comicSchema = new mongoose.Schema({
  title:       { type: String },
  num:         { type: Number },
  img:         { type: String },
  alt:         { type: String },
  transcript:  { type: String },
  month:       { type: Number },
  year:        { type: Number },
  votecount:   { type: Number, default: 100 },
  viewcount:   { type: Number, default: 0 },
  user:        { type: mongoose.Schema.Types.ObjectId, ref:'User' }
});

var Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
