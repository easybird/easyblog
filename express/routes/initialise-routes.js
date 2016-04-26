import welcome from './welcome-routes.js';
import { addInitialRenderData } from '../../middleware/rendering/render-data.js';

export default function(app) {
    app.use('/', welcome);

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handlers

// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            addInitialRenderData(req, res, renderErrorPage);

            function renderErrorPage() {
                Object.assign(req.renderData, {message: err.message}, {error: err});

                res.status(err.status || 500);
                res.render('error', req.renderData);
            }
        });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        addInitialRenderData(req, res, renderErrorPage);

        function renderErrorPage() {
            Object.assign(req.renderData, {message: err.message}, {error: {}});

            res.status(err.status || 500);
            res.render('error', req.renderData);
        }
    });
}