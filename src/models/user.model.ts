import { Exclude } from 'class-transformer';

export default class User {
  id_user: string;

  name: string;

  email: string;

  @Exclude()
  password: string;

  birth_date: Date;

  is_active: number;

  first_access: number;

  last_login?: Date;

  created_at: Date;
}
