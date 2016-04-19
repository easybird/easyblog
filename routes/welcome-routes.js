import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Welcome from '../frontend-app/welcome-app/welcome.js';
import config from '../config.json';

var router = express.Router();

router.get('/',
    compileReactWelcomeApp,
    renderHomePage
);

function compileReactWelcomeApp(req, res, next) {
    var props = {
        title: 'Welcome to Easyblog!'
    };

    try {
        var welcomeFactory = React.createFactory(Welcome)(props);
        var welcomeApp = ReactDOMServer.renderToString(welcomeFactory);
    } catch (err) {
        console.log("Unable to render React component: " + JSON.stringify(err));
        return next(err);
    }

    (!req.renderData) ? req.renderData = {} : undefined;
    req.renderData.react = {
        renderedApp: welcomeApp,
        bundle: config.react.htmlDir + config.react.components.welcome.bundle,
        initProps: props
    };

    next();
}

function renderHomePage(req, res, next) {
    return res.render('welcome', req.renderData);
}


module.exports = router;
