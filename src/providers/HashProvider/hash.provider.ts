export default interface IHashProvider {
  encode(plainText: string): Promise<string>;

  compare(plainText: string, encoded: string): Promise<boolean>;
}
