import { injectable, inject } from 'tsyringe';

import AppError from '../shared/errors/AppError';
import Food from '../models/schemas/food';
import IFoodsRepository from '../repositories/IFoodsRepository';

@injectable()
class ReadAllFoodService {
  constructor(
    @inject('FoodRepository')
    private foodRepository: IFoodsRepository,
  ) {}

  public async execute(): Promise<Food[]> {
    const listFoodId = await this.foodRepository.find();

    if (!listFoodId) {
      throw new AppError('food not found', 400);
    }

    return listFoodId;
  }
}

export default ReadAllFoodService;
