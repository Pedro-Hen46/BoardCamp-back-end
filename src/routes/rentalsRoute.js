import { Router } from "express";

import queryValidate from "../middlewares/queryValidate.js";
import idParamsValidate from "../middlewares/idParamsValidate.js";
import returnRentalsValidate from '../middlewares/returnRentalsValidate.js';
import postRentalsValidate from '../middlewares/postRentalsValidate.js';
import deleteRentalsValidate from '../middlewares/deleteRentalsValidate.js';
import {
  postRentals,
  getRentals,
  returnRentals,
  deleteRentals,
} from "../controllers/rentalsControllers.js";

const route = Router();

route.get("/rentals", queryValidate, getRentals);
route.post("/rentals", postRentalsValidate, postRentals);
route.post(
  "/rentals/:id/return",
  idParamsValidate,
  returnRentalsValidate,
  returnRentals
);
route.delete(
  "/rentals/:id",
  idParamsValidate,
  deleteRentalsValidate,
  deleteRentals
);

export default route;
