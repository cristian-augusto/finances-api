import 'express-async-errors';
import 'reflect-metadata';
import express, { Express } from 'express';
import cors from 'cors';
import errorHandlerMiddlware from './middlewares/error-handler.middlware';
import appRoutes from './routes/app.routes';

export type AppConfig = {
  port: number;
  apiPrefix: string;
};

export default class App {
  private app: Express;
  private config: AppConfig;
  constructor(config: AppConfig) {
    this.app = express();
    this.config = config;
    this.setupExpress();
    this.setupRoutes();
    this.setupMiddlewares();
  }

  private setupExpress() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setupMiddlewares() {
    this.app.use(errorHandlerMiddlware);
  }

  private setupRoutes() {
    this.app.use(this.config.apiPrefix, appRoutes);
  }

  start(): void {
    this.app.listen(this.config.port, () => console.log(`APP started at PORT ${this.config.port}`));
  }
}
