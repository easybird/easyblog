import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import { BASE_PATH } from '../config-loader.js';
import initialiseRoutes from './routes/initialise-routes.js';

export function setViewEngine(app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(BASE_PATH, 'public', 'favicon.ico')));

    addPublicFiles(app);

    function addPublicFiles(app) {
        app.use(express.static(path.join(BASE_PATH, 'public')));

        // make draft-js javascript publicly available
        app.use('/draft-js', express.static(path.join(BASE_PATH, 'node_modules', 'draft-js', 'dist')));

        // make jquery publicly available
        app.use('/jquery', express.static(path.join(BASE_PATH, 'node_modules', 'jquery', 'dist')));

        // make materialize publicly available
        app.use('/materialize-css', express.static(path.join(BASE_PATH, 'node_modules', 'materialize-css', 'dist')));
    }
}

export const setRoutes = initialiseRoutes;

