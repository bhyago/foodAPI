/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import { format } from 'date-fns'

import AppError from '../errors/AppError';
import Food from '../models/food';
// import FoodRepository from '../repositories/FoodRepository';

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
    const foodRepository = getRepository(Food);

    const currentDate = format(new Date(), 'ddMMyyyy')
    const informatedDate = format(expiredDate, 'ddMMyyyy')

    if (informatedDate <= currentDate) {
      throw new AppError('It is not possible to register expired foods', 401);
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
