import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import AppError from '../exceptions/app.exception';
import parseZodError from '../utils/parseZodError';

const errorHandlerMiddlware = (error: Error, _request: Request, response: Response, _next: NextFunction) => {
  console.error(error);

  if (error instanceof AppError) {
    return response.status(error.status_code).json({
      status: error.status_code,
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return response.status(400).json({
      status: 400,
      message: 'Ops, invalid incoming payload!',
      details: parseZodError(error),
    });
  }

  return response.status(500).json({
    status: 500,
    message: 'Internal server error!',
  });
};

export default errorHandlerMiddlware;
