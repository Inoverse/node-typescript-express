import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
// custom imports
import * as middleware from './middleware/default';
import * as routes from './routes/default';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    middleware.setup();
    routes.defaultRoute();
  }
}

export default new App().express;
