/* eslint-disable class-methods-use-this */
import { format } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '../shared/errors/AppError';
import Food from '../models/food';
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
    // const listFoodId = await this.foodRepository.findById(id);

    // if (!listFoodId) {
    //   throw new AppError('food not found', 400);
    // }

    const currentDate = format(new Date(), 'ddMMyyyy');
    const informatedDate = format(expiredDate, 'ddMMyyyy');

    if (informatedDate <= currentDate) {
      throw new AppError('It is not possible to register expired foods', 401);
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
