import Food from '../models/food';

export default interface IFoodsRepository {
  create(): Promise<Food>;
}
