import { config } from 'dotenv';
import path from 'path';

const envPath = path.join(__dirname, '..', '..', process.env.NODE_ENV !== 'production' ? '.env' : '.env.production');

config({
  path: envPath,
});

const AppConfig = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
  API_PREFIX: process.env.API_PREFIX || '/api',
};

export default AppConfig;
