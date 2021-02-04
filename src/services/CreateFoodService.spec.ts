import CreateFoodService from './CreateFoodService';
import FakeCreateFoodRepository from './fakes/FakeCreateFoodService';

describe('CreateFood', () => {
  it('should be able to create a new food', async () => {
    const fakeCreateFoodRepository = new FakeCreateFoodRepository();
    const createFood = new CreateFoodService(

    )
   const food = await createFood.execute({
    name: 'ds',
    amount: 'sdsa',
    weight: 'ssdsdf',
    taste: 'werwerwe',
    texture: 'dfdfds',
    expiredDate: new Date(),
    });
    expect(food).toHaveProperty('id');


  });

//   it('should be able to create a new food', () => {

//   });
// });
