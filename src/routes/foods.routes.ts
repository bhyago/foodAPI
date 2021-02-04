import { Router } from 'express';
import { getRepository } from 'typeorm';
import { parseISO } from 'date-fns';

// import FoodRepository from '../repositories/FoodRepository';
import CreateFoodService from '../services/CreateFoodService';
import UpdateFoodService from '../services/UpdateFoodService';
import Food from '../models/food';

const foodsRouter = Router();

foodsRouter.get('/', async (request, response) => {
  const foodRepository = getRepository(Food);
  const foods = await foodRepository.find();

  return response.json(foods);
});

foodsRouter.post('/', async (request, response) => {
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
});

foodsRouter.put('/:id', async (request, response) => {
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
});

foodsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  if (!id) {
    return response.status(400).json({ error: 'food not found' });
  }

  const foodRepository = getRepository(Food);
  await foodRepository.delete(id);
  return response.json({});
});

export default foodsRouter;
