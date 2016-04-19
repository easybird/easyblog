import welcome from './welcome-routes.js';

export function initRoutes(app) {
    app.use('/', welcome);
}