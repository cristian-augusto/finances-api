import { PrismaClient } from '@prisma/client';
import UsersHelper from '../../../helpers/users.helper';
import User from '../../../models/user.model';
import usePrisma from '../../../providers/usePrisma';
import IUsersRepository from '../../users.repository';

export default class UsersRepositoryPrisma implements IUsersRepository {
  private client: PrismaClient;
  constructor() {
    this.client = usePrisma();
  }
  async findById(id: string): Promise<User | undefined> {
    const user = await this.client.user.findUnique({ where: { id_user: id } });

    return user ? UsersHelper.toInstance(user) : undefined;
  }
  async update(id: string, dto: Partial<User>): Promise<void> {
    await this.client.user.update({
      data: { ...dto },
      where: {
        id_user: id,
      },
    });
  }
  async delete(id: string): Promise<void> {
    await this.client.user.delete({
      where: {
        id_user: id,
      },
    });
  }
  async create(dto: User): Promise<User> {
    const user = await this.client.user.create({
      data: { ...dto },
    });

    return UsersHelper.toInstance(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.client.user.findFirst({ where: { email } });

    return user ? UsersHelper.toInstance(user) : undefined;
  }
}
