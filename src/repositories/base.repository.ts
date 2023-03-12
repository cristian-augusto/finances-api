export default interface IBaseRepository<T> {
  create(dto: Partial<T>): Promise<T>;
  findById(id: string): Promise<T | undefined>;
  update(id: string, dto: Partial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}
