// src/app.ts
import Fastify from "fastify";

import {carsRoutes} from "./modules/CarsModule/router/index.js";

const fastify = Fastify({ logger: true });
fastify.get("/health", async (request, reply) => {
    return { status: "OK", message: "Server is healthy" };
  });
// Register routes

fastify.register(carsRoutes, { prefix: "/cars" });

export default fastify;
