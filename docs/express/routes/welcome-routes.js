import express from 'express';
import React from 'react';
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

    (!req.renderData) ? req.renderData = {} : undefined;
    req.renderData.react = {
        bundle: REACT.htmlDir + REACT.components.welcome.bundle,
        initProps: props
    };

    next();
}

function renderHomePage(req, res, next) {
    return res.render('welcome', req.renderData);
}


module.exports = router;
