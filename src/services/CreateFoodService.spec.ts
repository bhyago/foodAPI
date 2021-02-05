import 'reflect-metadata';
import AppError from '../shared/errors/AppError';
import CreateFoodService from './CreateFoodService';
import FakeFoodsRepository from '../repositories/fakes/FakeFoodRepository';

describe('CreateFood', () => {
  it('should be able to create a new food', async () => {
    const fakeFoodsRepository = new FakeFoodsRepository();
    const createFoodService = new CreateFoodService(fakeFoodsRepository);

    const food = await createFoodService.execute({
      name: 'Manga',
      amount: '10',
      weight: '5kg',
      taste: 'doce',
      texture: 'lisa',
      expiredDate: new Date(2021, 12, 31),
    });
    expect(food.name).toBe('Manga');
    expect(food.amount).toBe('10');
    expect(food.weight).toBe('5kg');
    expect(food.taste).toBe('doce');
    expect(food.texture).toBe('lisa');
    expect(food.expiredDate).toEqual(new Date(2021, 12, 31));
  });

  it('should not be able to create a new food with an expired date', async () => {
    const fakeFoodsRepository = new FakeFoodsRepository();
    const createFoodService = new CreateFoodService(fakeFoodsRepository);
    expect(
      createFoodService.execute({
        name: 'Manga',
        amount: '10',
        weight: '5kg',
        taste: 'doce',
        texture: 'lisa',
        expiredDate: new Date(),
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
