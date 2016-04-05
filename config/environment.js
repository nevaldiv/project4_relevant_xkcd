var _ = require('lodash');

var localEnvVars = {
  TITLE:      'project4_relevant_xkcd',
  SAFE_TITLE: 'project4_relevant_xkcd',
  COOKIE_SECRET:  'notsosecretnowareyou',
  SESSION_SECRET: 'anotherfoolishsecret',
  TOKEN_SECRET:   'andafinalsecretsadasitis'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
