import { RequestHandler } from "express";
import { getLogger } from "@src/utils/loggers";
import { Logger } from "log4js";

export class LoggerMiddleware {
  logger: Logger;

  constructor(category: string) {
    this.logger = getLogger(category);
  }

  info(message: any): RequestHandler {
    return (_req, _res, next) => {
      this.logger.info(message);
      next();
    };
  }
}
