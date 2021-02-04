/* eslint-disable class-methods-use-this */
import Food from '../../models/food';

interface RequestDTO {
  name: string;
  amount: string;
  weight: string;
  taste: string;
  texture: string;
  expiredDate: Date;
}
class FoodRepository {
  private foods: Food[] = [];

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async create({
    name,
    amount,
    weight,
    taste,
    texture,
    expiredDate,
  }: RequestDTO): Promise<Food> {
    const food = new Food();

    Object.assign(food, { name, amount, weight, taste, texture, expiredDate });

    this.foods.push(food);

    return food;
  }
}

export default FoodRepository;
