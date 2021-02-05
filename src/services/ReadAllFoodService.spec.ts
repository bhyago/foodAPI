import 'reflect-metadata';
import ReadAllFoodService from './ReadAllFoodService';
import FakeFoodsRepository from '../repositories/fakes/FakeFoodRepository';

describe('ReadAll', () => {
  it('must be able to list foods', async () => {
    const fakeFoodsRepository = new FakeFoodsRepository();
    const readAllFoodService = new ReadAllFoodService(fakeFoodsRepository);
    // const createFoodService = new CreateFoodService(fakeFoodsRepository);

    const food = await readAllFoodService.execute();
    expect(food).toEqual([]);
  });
});
