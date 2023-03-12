export default interface CreateUserDTO {
  name: string;
  email: string;
  birth_date: string | Date;
  password: string;
}
