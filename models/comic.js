var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var comicSchema = new mongoose.Schema({
  title:       { type: String },
  num:         { type: Number },
  img:         { type: String },
  alt:         { type: String },
  description: { type: String },
  month:       { type: Number },
  year:        { type: Number }

});

var Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
