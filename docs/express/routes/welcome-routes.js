import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Welcome from '../../../core/welcome-app/welcome.js';
import { addInitialRenderData } from '../../middleware/rendering/render-data.js';
import rawDraft from '../../data/rawDraft.json';
import { REACT } from '../../config-loader.js';

var router = express.Router();

router.get('/',
    addInitialRenderData,
    compileReactWelcomeApp,
    renderHomePage
);

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
