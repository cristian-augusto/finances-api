export default class AppError extends Error {
  message: string;
  status_code: number;
  constructor(message: string, status_code = 400) {
    super(message);
    this.message = message;
    this.status_code = status_code;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}
