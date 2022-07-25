import { Router } from "express";
import {  getCustomers,  postCustomers, updateCustomers, getCustomersById } from "../controllers/customersController.js";
import customersValidate from "../middlewares/customersValidate.js";
import idParamsValidate from '../middlewares/idParamsValidate.js'
import checkCPF from "../middlewares/checkCPF.js";

const route = Router();

route.get("/customers", getCustomers);
route.post("/customers", customersValidate, checkCPF, postCustomers);
route.get("/customers/:id", idParamsValidate, getCustomersById);
route.put("/customers/:id", idParamsValidate, customersValidate, checkCPF, updateCustomers);

export default route;
