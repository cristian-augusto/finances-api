import { Request, Response } from 'express';
import { container } from 'tsyringe';
import User from '../models/user.model';
import CreateUserService from '../services/create-user.service';
import userView from '../views/user.view';

export default class UsersControllers {
  static async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserService);
    const { user } = await createUser.execute(request.body);

    return response.json({ user: userView.render(user) });
  }
}
