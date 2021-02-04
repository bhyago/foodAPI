import { getCustomRepository } from 'typeorm';

import Food from '../models/food';
import FoodRepository from '../repositories/FoodRepository';

interface RequestDTO {
  id: string;
  name: string;
  amount: string;
  weight: string;
  taste: string;
  texture: string;
  expiredDate: Date;
}

class UpdateFoodService {
  // eslint-disable-next-line class-methods-use-this
  public async execute({
    id,
    name,
    amount,
    weight,
    taste,
    texture,
    expiredDate,
  }: RequestDTO): Promise<Food> {
    const foodRepository = getCustomRepository(FoodRepository);

    const updateFood = await foodRepository.findOne(id);

    if (!updateFood) {
      throw new Error('id not found');
    }

    updateFood.name = name;
    updateFood.amount = amount;
    updateFood.weight = weight;
    updateFood.taste = taste;
    updateFood.texture = texture;
    updateFood.expiredDate = expiredDate;

    return foodRepository.save(updateFood);
  }
}

export default UpdateFoodService;
