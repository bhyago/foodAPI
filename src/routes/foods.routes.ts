import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import rrw from '.';

import FoodRepository from '../repositories/FoodRepository';
import CreateFoodService from '../services/CreateFoodService';
import UpdateFoodService from '../services/UpdateFoodService';

const foodsRouter = Router();
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Food API',
      version: '1.0.0',
    },
  },
  apis: ['../routes/foods.routes.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
foodsRouter.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /foods:
 *  get:
 *    description: Get all foods
 *    responses:
 *      200:
 *        description: Success
 */
foodsRouter.get('/', async (request, response) => {
  const foodRepository = getCustomRepository(FoodRepository);
  const foods = await foodRepository.find();

  return response.json(foods);
});

foodsRouter.post('/', async (request, response) => {
  try {
    const { name, amount, weight, taste, texture, expiredDate } = request.body;

    const parseDate = parseISO(expiredDate);

    const createFoodService = new CreateFoodService();

    const food = await createFoodService.execute({
      name,
      amount,
      weight,
      taste,
      texture,
      expiredDate: parseDate,
    });

    return response.json(food);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

foodsRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { name, amount, weight, taste, texture, expiredDate } = request.body;

    const updateFoodService = new UpdateFoodService();

    const food = await updateFoodService.execute({
      id,
      name,
      amount,
      weight,
      taste,
      texture,
      expiredDate,
    });

    return response.json(food);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

foodsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  if (!id) {
    return response.status(400).json({ error: 'food not found' });
  }

  const foodRepository = getCustomRepository(FoodRepository);
  await foodRepository.delete(id);
  return response.json({});
});

export default foodsRouter;
