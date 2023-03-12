import bcrypt from 'bcrypt';
import IHashProvider from '../hash.provider';

export default class BCryptHashProvider implements IHashProvider {
  encode(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, 10);
  }
  compare(plainText: string, encoded: string): Promise<boolean> {
    return bcrypt.compare(plainText, encoded);
  }
}
