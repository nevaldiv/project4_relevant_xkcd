var request = require('request');

var parsedreturn;

//loops through the api for the comics 100 at a time, & parses
for(i=1;i<101;i++){
  request.get('http://xkcd.com/' + i + '/info.0.json', function(err,res,body) {
    parsedreturn = JSON.parse(body);
    console.log(parsedreturn, ",");
  });

};
