import { PrismaClient } from '@prisma/client';

let prismaClient: PrismaClient;

const usePrisma = () => {
  if (!prismaClient) prismaClient = new PrismaClient();

  return prismaClient;
};

export default usePrisma;
