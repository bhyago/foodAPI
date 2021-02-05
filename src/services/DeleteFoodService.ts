import { injectable, inject } from 'tsyringe';

import AppError from '../shared/errors/AppError';
import Food from '../models/schemas/food';
import IFoodsRepository from '../repositories/IFoodsRepository';

interface RequestDTO {
  id: string;
}

@injectable()
class DeleteFoodService {
  constructor(
    @inject('FoodRepository')
    private foodRepository: IFoodsRepository,
  ) {}

  public async execute({ id }: RequestDTO): Promise<Food> {
    const deleteFood = await this.foodRepository.findById(id);

    if (!deleteFood) {
      throw new AppError('food not found', 400);
    }

    return this.foodRepository.delete(deleteFood);
  }
}

export default DeleteFoodService;
