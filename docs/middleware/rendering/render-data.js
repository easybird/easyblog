import { LAYOUT } from '../../config-loader.js';

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