import express from "express";
import { indexController } from "@src/controllers/index.controller";
import { LoggerMiddleware } from "@src/middlewares/logger.middleware";
const router = express.Router();

const logger = new LoggerMiddleware("INDEX_ROUTE");

/* GET home page. */
router.get("/", logger.info("hello Express"), indexController);

export default router;
