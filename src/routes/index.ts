import { Router } from 'express';
import foodsRouter from './foods.routes';

const routes = Router();

routes.use('/foods', foodsRouter);

export default routes;
