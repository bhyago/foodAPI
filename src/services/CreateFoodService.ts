/* eslint-disable class-methods-use-this */
import { format } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '../shared/errors/AppError';
import Food from '../models/schemas/food';
import IFoodsRepository from '../repositories/IFoodsRepository';

interface IRequestDTO {
  // id: string;
  name: string;
  amount: string;
  weight: string;
  taste: string;
  texture: string;
  expiredDate: Date;
}

@injectable()
class CreateFoodService {
  constructor(
    @inject('FoodRepository')
    private foodRepository: IFoodsRepository,
  ) {}

  public async execute({
    // id,
    name,
    amount,
    weight,
    taste,
    texture,
    expiredDate,
  }: IRequestDTO): Promise<Food> {
    const currentDate = format(new Date(), 'ddMMyyyy');
    const informatedDate = format(expiredDate, 'ddMMyyyy');

    if (informatedDate <= currentDate) {
      throw new AppError('It is not possible to register expired foods', 400);
    }

    const food = await this.foodRepository.create({
      name,
      amount,
      weight,
      taste,
      texture,
      expiredDate,
    });

    return food;
  }
}

export default CreateFoodService;
