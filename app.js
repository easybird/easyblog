import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { setViewEngine, setRoutes } from './express/setup-express.js';

var app = express();

//view engine setup
setViewEngine(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

setRoutes(app);

module.exports = app;
