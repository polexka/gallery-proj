module.exports.JWT_SALT = 9;

// eslint-disable-next-line no-useless-escape
module.exports.regexURL = /(https?:\/\/)(www\.)?([a-zA-Z0-9-]{0,63}\.)([a-zA-Z]{2,4})(\/[\w\-._~:/?#[\]@!$&'()*+,;=]#?)?/;

module.exports.allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'localhost:3000',
];
