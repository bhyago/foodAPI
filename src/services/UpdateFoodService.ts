import { injectable, inject } from 'tsyringe';

import AppError from '../shared/errors/AppError';
import Food from '../models/schemas/food';
import IFoodsRepository from '../repositories/IFoodsRepository';
// import FoodRepository from '../repositories/FoodRepository';

interface RequestDTO {
  id: string;
  name: string;
  amount: string;
  weight: string;
  taste: string;
  texture: string;
  expiredDate: Date;
}

@injectable()
class UpdateFoodService {
  constructor(
    @inject('FoodRepository')
    private foodRepository: IFoodsRepository,
  ) {}

  public async execute({
    id,
    name,
    amount,
    weight,
    taste,
    texture,
    expiredDate,
  }: RequestDTO): Promise<Food> {
    const updateFood = await this.foodRepository.updateByid(id);

    if (!updateFood) {
      throw new AppError('id not found', 401);
    }

    updateFood.name = name || updateFood.name;
    updateFood.amount = amount || updateFood.amount;
    updateFood.weight = weight || updateFood.weight;
    updateFood.taste = taste || updateFood.taste;
    updateFood.texture = texture || updateFood.texture;
    updateFood.expiredDate = expiredDate || updateFood.expiredDate;

    return this.foodRepository.save(updateFood);
  }
}

export default UpdateFoodService;
