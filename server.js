// server.js

'use strict'

const express    = require('express');
const path       = require('path') ;
const bodyParser = require('body-parser');
const app        = express();
const helmet     = require('helmet');
const logger     = require('morgan'); 

const port       = process.env.PORT || 8080;
const uri        = 'http: //localhost: ' + port; 

app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

app.use(express.static(__dirname));
app.use((req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, function(){
    console.log('sever on ' + uri);
}) ;