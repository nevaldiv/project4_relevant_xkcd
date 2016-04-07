var Comic = require('../models/comic');

//||||||||||||||||||||||||||--
// GET COMICS
//||||||||||||||||||||||||||--
var comicIndex = function(req, res) {
  Comic.find({}, function(err, comics) {
    if (err) {
      res.send(err);
    }

    // return the comic as JSON
    res.json(comics);
    console.log(comics);
  });
}

var comicEdit = function(req,res){
  var id = req.params.id;
  Comic.findById(id, function(err,comic){
    if(err) res.send(err);
    if(req.body.votecount != comic.votecount) comic.votecount = parseInt(req.body.votecount);
    comic.save(function(err, updatedcomic){
      if(err) res.send(err);
      console.log("Comic votecount changed!");
      res.json(updatedcomic);
    })
  })
}



// Export the function/s as JSON
module.exports = {
  // comicShow:   comicShow,
  comicIndex:  comicIndex,
  comicEdit:   comicEdit
}
