import 'reflect-metadata';
// import AppError from '../shared/errors/AppError';
import ReadAllFoodService from './ReadAllFoodService';
import FakeFoodsRepository from '../repositories/fakes/FakeFoodRepository';
import CreateFoodService from './CreateFoodService';

describe('ReadAll', () => {
  it('must be able to list foods', async () => {
    const fakeFoodsRepository = new FakeFoodsRepository();
    const readAllFoodService = new ReadAllFoodService(fakeFoodsRepository);

    const food = await readAllFoodService.execute();
    expect(food).toEqual([]);
  });
});
