import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';
import FoodsController from '../controllers/FoodsController';

const foodsRouter = Router();
const foodsController = new FoodsController();

foodsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      amount: Joi.string().required(),
      weight: Joi.string(),
      taste: Joi.string(),
      texture: Joi.string(),
      expiredDate: Joi.string().required(),
    },
  }),
  foodsController.create,
);

foodsRouter.get('/', foodsController.ReadAll);

foodsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  foodsController.ReadOne,
);

foodsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  foodsController.update,
);

foodsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  foodsController.delete,
);

export default foodsRouter;
