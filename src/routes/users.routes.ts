import { Router } from 'express';
import UsersControllers from '../controllers/users.controller';

const usersRoutes = Router();
usersRoutes.post('/', UsersControllers.create);

export default usersRoutes;
