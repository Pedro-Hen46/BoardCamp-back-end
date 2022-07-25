import { Router } from 'express';

import { getCategories, postCategories } from '../controllers/categoriesControllers.js';

const route = Router();

route.get('/categories', getCategories);
route.post('/categories', postCategories);

export default route;
