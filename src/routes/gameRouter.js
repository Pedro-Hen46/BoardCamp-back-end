import { Router } from 'express';
import { getGames, postGames } from '../controllers/gamesControllers.js';

const route = Router();

route.get('/games', getGames);
route.post('/games', postGames);

export default route;