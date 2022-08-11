import { getIndex } from "@src/services/index.service";
import { Request, RequestHandler, Response } from "express";

export const indexController = <RequestHandler>(
  function (req: Request, res: Response) {
    res.send(getIndex());
  }
);
