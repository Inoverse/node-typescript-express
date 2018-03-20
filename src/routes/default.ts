import * as express from 'express';

// Configure API endpoints.
export function defaultRoute(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
        res.json({
            message: 'Hello World!'
        });
    });
    this.express.use('/', router);
}
