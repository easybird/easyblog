import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Welcome from '../../frontend-app/welcome-app/welcome.js';
import rawDraft from '../../data/rawDraft.json';
import { LAYOUT, REACT } from '../../config-loader.js';

var router = express.Router();

router.get('/',
    addInitialRenderData,
    compileReactWelcomeApp,
    renderHomePage
);

export function addInitialRenderData(req, res, next) {
    req.renderData = {
        metaData: {
            title: 'Welcome to Easyblog!',
            description: 'This is a javascript modern blogging framework'
        },
        layout: LAYOUT
    };

    return next();
}

function compileReactWelcomeApp(req, res, next) {
    var props = {
        title: req.renderData.metaData.title,
        initialRawDraft: rawDraft
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
        bundle: REACT.htmlDir + REACT.components.welcome.bundle,
        initProps: props
    };

    next();
}

function renderHomePage(req, res, next) {
    return res.render('welcome', req.renderData);
}


module.exports = router;
