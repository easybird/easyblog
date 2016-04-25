import welcome from './welcome-routes.js';

export default function(app) {
    app.use('/', welcome);
}