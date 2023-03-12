import { container } from 'tsyringe';
import IHashProvider from '../providers/HashProvider/hash.provider';
import BCryptHashProvider from '../providers/HashProvider/implementations/bcrypt-hash.provider';
import UsersRepositoryInMemory from '../repositories/implementations/in-memory/users.repository';
import UsersRepositoryPrisma from '../repositories/implementations/prisma/users.repository';
import IUsersRepository from '../repositories/users.repository';

export enum InjectionTokens {
  IHashProvider = 'IHashProvider',
  IUsersRepository = 'IUsersRepository',
}

container.registerSingleton<IHashProvider>(InjectionTokens.IHashProvider, BCryptHashProvider);

container.registerSingleton<IUsersRepository>(InjectionTokens.IUsersRepository, UsersRepositoryPrisma);
