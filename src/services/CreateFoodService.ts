/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';

import Food from '../models/food';
import FoodRepository from '../repositories/FoodRepository';

interface RequestDTO {
  name: string;
  amount: string;
  weight: string;
  taste: string;
  texture: string;
  expiredDate: Date;
}

class CreateFoodService {
  public async execute({
    name,
    amount,
    weight,
    taste,
    texture,
    expiredDate,
  }: RequestDTO): Promise<Food> {
    const foodRepository = getCustomRepository(FoodRepository);

    const findExpiredFoodDate = await foodRepository.findByDate(expiredDate);

    if (findExpiredFoodDate) {
      throw Error('It is not possible to register expired foods');
    }

    const food = foodRepository.create({
      name,
      amount,
      weight,
      taste,
      texture,
      expiredDate,
    });

    await foodRepository.save(food);

    return food;
  }
}

export default CreateFoodService;
