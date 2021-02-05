import { getRepository, Repository } from 'typeorm';

import IFoodsRepository from './IFoodsRepository';
import ICreateFoodDTO from './dtos/ICreateFoodDTO';
import Food from '../models/food';

class FoodRepository implements IFoodsRepository {
  private ormRepository: Repository<Food>;

  constructor() {
    this.ormRepository = getRepository(Food);
  }

  public async find(): Promise<Food[]> {
    const food = await this.ormRepository.find();

    return food;
  }

  public async findById(id: string): Promise<Food | undefined> {
    const food = await this.ormRepository.findOne(id);

    return food;
  }

  public async updateByid(id: string): Promise<Food | undefined> {
    const foodUpdate = await this.ormRepository.findOne(id);

    return foodUpdate;
  }

  public async create({
    name,
    amount,
    weight,
    taste,
    texture,
    expiredDate,
  }: ICreateFoodDTO): Promise<Food> {
    const food = this.ormRepository.create({
      name,
      amount,
      weight,
      taste,
      texture,
      expiredDate,
    });

    await this.ormRepository.save(food);

    return food;
  }

  public async save(food: Food): Promise<Food> {
    return this.ormRepository.save(food);
  }

  public async delete(food: Food): Promise<Food> {
    return this.ormRepository.delete(food);
  }
}

export default FoodRepository;
