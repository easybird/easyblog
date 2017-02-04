import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import { BASE_PATH } from '../config-loader.js';
import initialiseRoutes from './routes/initialise-routes.js';

export function setViewEngine(app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'pug');

    app.use(favicon(path.join(BASE_PATH, 'public', 'favicon.ico')));

    addPublicFiles(app);

    function addPublicFiles(app) {
        app.use(express.static(path.join(BASE_PATH, 'public')));
    }
}

export const setRoutes = initialiseRoutes;

