const moment = require('moment');

const logger = (req, res, next) => {
 
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
  return `${req.protocol}://${req.get('host')}${
    req.originalUrl
  }: ${moment().format()}`
};

module.exports = logger;
