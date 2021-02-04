import { EntityRepository, Repository } from 'typeorm';
import Food from '../models/food';

@EntityRepository(Food)
class FoodRepository extends Repository<Food> {
  public async findByDate(expiredDate: Date): Promise<Food | null> {
    const findFoodDate = await this.findOne({
      where: { expiredDate },
    });

    return findFoodDate || null;
  }
}

export default FoodRepository;
