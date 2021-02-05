import { Router } from 'express';

import FoodsController from '../controllers/FoodsController';

const foodsRouter = Router();
const foodsController = new FoodsController();

foodsRouter.post('/', foodsController.create);

foodsRouter.get('/', foodsController.ReadAll);

foodsRouter.get('/:id', foodsController.ReadOne);

foodsRouter.put('/:id', foodsController.update);

foodsRouter.delete('/:id', foodsController.delete);

export default foodsRouter;
