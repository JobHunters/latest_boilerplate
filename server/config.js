const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const request = require('request');
const cors = require('cors');

const app = express();

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// use it before all route definitions
app.use(cors({ origin: '*' }));
//HTTP Requests go here
app.get('/products', (req, res) => {
  request(
    'https://maxmvpstorage.blob.core.windows.net/drops/products-demo.json',
    (err, response, body) => {
      if (err) {
        console.error(err);
      } else {
        console.log(response.statusCode);
        res.send(body);
      }
    }
  );
});

module.exports = app;
