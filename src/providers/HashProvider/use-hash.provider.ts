import { container } from 'tsyringe';
import { InjectionTokens } from '../../container';
import IHashProvider from './hash.provider';

const useHashProvider = (): IHashProvider => {
  const hashProvider = container.resolve<IHashProvider>(InjectionTokens.IHashProvider);

  return hashProvider;
};

export default useHashProvider;
