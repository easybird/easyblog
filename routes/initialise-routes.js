import routes from './index';
import users from './users';

export function initRoutes(app) {
    app.use('/', routes);
    app.use('/users', users);
}