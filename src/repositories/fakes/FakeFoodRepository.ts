import { ObjectID } from 'typeorm';
import IFoodsRepository from '../IFoodsRepository';
import ICreateFoodDTO from '../dtos/ICreateFoodDTO';
import Food from '../../models/schemas/food';

class FoodRepository implements IFoodsRepository {
  private foods: Food[] = [];

  public async find(): Promise<Food[]> {
    return this.foods;
  }

  public async findById(id: string): Promise<Food | undefined> {
    const findFoodById = this.foods.find(food => food.id === new ObjectID(id));

    return findFoodById;
  }

  public async updateByid(id: string): Promise<Food | undefined> {
    const food = this.foods.find(
      foodUpdate => foodUpdate.id === new ObjectID(id),
    );

    return food;
  }

  public async create({
    name,
    amount,
    weight,
    taste,
    texture,
    expiredDate,
  }: ICreateFoodDTO): Promise<Food> {
    const food = new Food();

    food.name = name;
    food.amount = amount;
    food.weight = weight;
    food.taste = taste;
    food.texture = texture;
    food.expiredDate = expiredDate;

    this.foods.push(food);

    return food;
  }

  public async save(food: Food): Promise<Food> {
    const findIndex = this.foods.findIndex(saveFood => saveFood.id === food.id);

    this.foods[findIndex] = food;

    return food;
  }

  public async delete(food: Food): Promise<Food> {
    return food;
  }
}

export default FoodRepository;
