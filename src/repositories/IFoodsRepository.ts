import Food from '../models/schemas/food';
import ICreateFoodDTO from './dtos/ICreateFoodDTO';

export default interface IFoodsRepository {
  create(data: ICreateFoodDTO): Promise<Food>;
  find(): Promise<Food[]>;
  findById(id: string): Promise<Food | undefined>;
  updateByid(id: string): Promise<Food | undefined>;
  delete(food: Food): Promise<Food>;
  save(food: Food): Promise<Food>;
}
