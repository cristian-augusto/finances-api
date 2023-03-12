import { instanceToPlain, plainToInstance } from 'class-transformer';
import User from '../models/user.model';

export default class UsersHelper {
  static toInstance(plain: any) {
    return plainToInstance(User, plain);
  }

  static toPlain(user: User) {
    return instanceToPlain(user);
  }
}
