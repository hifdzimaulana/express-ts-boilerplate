import express from "express";
import { getLogger } from "@src/utils/loggers";
import { getIndex } from "@src/services";
const router = express.Router();

const logger = getLogger("INDEX_ROUTE");

/* GET home page. */
router.get("/", function (_req, res, _next) {
  logger.info("hello Express");
  res.json(getIndex());
});

export default router;
