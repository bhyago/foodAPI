import { container } from 'tsyringe';

import IFoodsRepository from '../../repositories/IFoodsRepository';
import FoodRepository from '../../repositories/FoodRepository';

container.registerSingleton<IFoodsRepository>('FoodRepository', FoodRepository);
