import { CarsController } from "../controller/index.js";
import { FastifyInstance } from "fastify";

// Define carsRoutes as a function that accepts Fastify's instance
export async function carsRoutes(router: FastifyInstance) {
  router.get("/", CarsController.getCars);
}
