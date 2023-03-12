import User from '../models/user.model';
import IBaseRepository from './base.repository';

interface IUsersRepository extends IBaseRepository<User> {
  findByEmail(email: string): Promise<User | undefined>;
}

export default IUsersRepository;
