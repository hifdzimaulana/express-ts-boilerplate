import createError from "http-errors";

import express, { RequestHandler, ErrorRequestHandler } from "express";
import path from "path";
import logger from "morgan";

import indexRouter from "@src/routes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routerSetup();
    this.errorHandler();
  }

  private config() {
    // view engine setup
    this.app.set("views", path.join(__dirname, "views"));

    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  private routerSetup() {
    this.app.use("/", indexRouter);
  }

  private errorHandler() {
    // catch 404 and forward to error handler
    const requestHandler: RequestHandler = function (_req, _res, next) {
      next(createError(404));
    };
    this.app.use(requestHandler);

    // error handler
    const errorRequestHandler: ErrorRequestHandler = function (
      err,
      req,
      res,
      _next
    ) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : undefined;

      res.status(err.status || 500);
      res.json(res.locals);
    };
    this.app.use(errorRequestHandler);
  }
}

export default new App().app;
