import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import { errors } from 'celebrate';
import * as swaggerDocument from './swagger.json';

import routes from './http/routes';
import AppError from './shared/errors/AppError';
import './shared/containers';

import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server errror',
  });
});

app.use('/v1/apiDoc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
