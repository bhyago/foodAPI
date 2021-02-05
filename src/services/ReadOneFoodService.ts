import { injectable, inject } from 'tsyringe';

import AppError from '../shared/errors/AppError';
import Food from '../models/food';
import IFoodsRepository from '../repositories/IFoodsRepository';

@injectable()
class ReadOneFoodService {
  constructor(
    @inject('FoodRepository')
    private foodRepository: IFoodsRepository,
  ) {}

  public async execute(id: string): Promise<Food> {
    const listFoodId = await this.foodRepository.findById(id);

    if (!listFoodId) {
      throw new AppError('food not found', 400);
    }

    return listFoodId;
  }
}

export default ReadOneFoodService;
