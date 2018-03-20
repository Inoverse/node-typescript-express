import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

// Configure Express middleware.
export function setup(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
}
