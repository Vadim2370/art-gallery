const cors = require('cors');

const allowedCors = [
  'https://stdem11.nomoredomains.sbs',
  'http://stdem11.nomoredomains.sbs',
  'http://localhost:3000',
];

const corsOption = {
  origin: allowedCors,
  credentials: true,
};

module.exports = cors(corsOption);
