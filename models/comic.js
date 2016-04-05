var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var comicSchema = new mongoose.Schema({
  title:       { type: String },
  num:         { type: Number },
  img:         { type: String },
  alt:         { type: String },
  transcript:  { type: String },
  month:       { type: Number },
  votecount:   { type: Number, default: 100 },
  viewcount:   { type: Number, default: 0 }

});

var Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
