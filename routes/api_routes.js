var express = require('express'),
    router  = new express.Router();

// Require controllers.
var usersCtrl  = require('../controllers/users');
var comicsCtrl = require('../controllers/comics');

// Require token authentication.
var token = require('../config/token_auth');

//comics resource paths:
router.get('/comics', comicsCtrl.comicIndex);
router.put('/comics/:id', comicsCtrl.comicEdit);


// users resource paths:
router.post('/users',    usersCtrl.create);
router.get( '/users/me', token.authenticate, usersCtrl.me);
router.put( '/users/me', token.authenticate, usersCtrl.update);

router.post('/token', token.create);
router.post('/users/me/token', token.authenticate, token.refresh);

module.exports = router;

