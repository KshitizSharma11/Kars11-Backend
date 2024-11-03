import { CarsController } from '../controller/index.js';
import Fastify from 'fastify';
const router = Fastify();

export const carsRoutes=async()=>{
router.get('/',CarsController.getCars);
}


