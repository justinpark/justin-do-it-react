const functions = require('firebase-functions');
const next = require('next');
const apiserver = require('./apiserver');

var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev, conf: { distDir: 'next' } });
var handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});

exports.apiserver = functions.https.onRequest(apiserver);
