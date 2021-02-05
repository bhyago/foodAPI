import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateFoodService from '../../services/CreateFoodService';
import ReadAllFoodService from '../../services/ReadAllFoodService';
import ReadOneFoodService from '../../services/ReadOneFoodService';
import UpdateFoodService from '../../services/UpdateFoodService';
import DeleteFoodService from '../../services/DeleteFoodService';

export default class FoodsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, amount, weight, taste, texture, expiredDate } = request.body;

    const parseDate = parseISO(expiredDate);

    const createFoodService = container.resolve(CreateFoodService);

    const food = await createFoodService.execute({
      name,
      amount,
      weight,
      taste,
      texture,
      expiredDate: parseDate,
    });

    return response.json(food);
  }

  public async ReadAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const readAllFoodService = container.resolve(ReadAllFoodService);
    const foods = await readAllFoodService.execute();
    return response.json(foods);
  }

  public async ReadOne(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const readOneFoodService = container.resolve(ReadOneFoodService);
    const food = await readOneFoodService.execute(id);
    return response.json(food);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, amount, weight, taste, texture, expiredDate } = request.body;

    const updateFoodService = container.resolve(UpdateFoodService);

    const food = await updateFoodService.execute({
      id,
      name,
      amount,
      weight,
      taste,
      texture,
      expiredDate,
    });

    return response.json(food);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteFoodService = container.resolve(DeleteFoodService);

    await deleteFoodService.execute({ id });

    return response.json({});
  }
}
