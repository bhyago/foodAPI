import { getRepository, MongoRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Food from '../models/food';
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

class UpdateFoodService {
  public async execute({
    id,
    name,
    amount,
    weight,
    taste,
    texture,
    expiredDate,
  }: RequestDTO): Promise<Food> {
    const foodRepository = getRepository(Food);

    const updateFood = await foodRepository.findOne(id);

    if (!updateFood) {
      throw new AppError('id not found', 401);
    }

    updateFood.name = name ? name : updateFood.name;
    updateFood.amount = amount ? amount : updateFood.amount;
    updateFood.weight = weight ? weight : updateFood.weight;
    updateFood.taste = taste ? taste : updateFood.taste;
    updateFood.texture = texture ? texture : updateFood.texture;
    updateFood.expiredDate = expiredDate ? expiredDate : updateFood.expiredDate;

    return foodRepository.save(updateFood);
  }
}

export default UpdateFoodService;
