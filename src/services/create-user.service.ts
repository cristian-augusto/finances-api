import { injectable, inject } from 'tsyringe';
import { InjectionTokens } from '../container';
import z from 'zod';
import User from '../models/user.model';
import useHashProvider from '../providers/HashProvider/use-hash.provider';
import IUsersRepository from '../repositories/users.repository';
import AppError from '../exceptions/app.exception';
import CreateUserDTO from '../dtos/create-user.dto';

const requestSchema: z.ZodType<CreateUserDTO> = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(3)
      .max(20)
      .transform((value) => value.toUpperCase()),
    email: z
      .string()
      .email()
      .transform((value) => value.toLocaleLowerCase()),
    birth_date: z
      .string()
      .datetime()
      .transform((value) => new Date(value)),
    password: z.string().min(8).max(12),
  });
});

@injectable()
export default class CreateUserService {
  constructor(
    @inject(InjectionTokens.IUsersRepository)
    private usersRepository: IUsersRepository
  ) {}

  async execute(payload: CreateUserDTO): Promise<{ user: User }> {
    const { name, email, birth_date, password } = requestSchema.parse(payload);

    let user = await this.usersRepository.findByEmail(email);

    if (user) throw new AppError('E-mail already in use.');

    const hashedPassword = await useHashProvider().encode(password);

    user = await this.usersRepository.create({
      name,
      email,
      birth_date: new Date(birth_date),
      password: hashedPassword,
      first_access: 1,
      is_active: 0,
      created_at: new Date(),
      last_login: undefined,
    });

    return {
      user,
    };
  }
}
