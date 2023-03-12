import User from '../../../models/user.model';
import IUsersRepository from '../../users.repository';

export default class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }
  async create(dto: Partial<User>): Promise<User> {
    const user = { ...new User(), ...dto };
    this.users.push(user);
    return user;
  }
  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id_user === id);
  }
  async update(id: string, dto: Partial<User>): Promise<void> {
    this.users = this.users.map((user) => (user.id_user === id ? { ...user, ...dto } : user));
  }
  async delete(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id_user !== id);
  }
}
