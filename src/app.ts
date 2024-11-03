// src/app.ts
import Fastify from "fastify";

import {carsRoutes} from "./modules/CarsModule/router/index.js";

const fastify = Fastify({ logger: true });

// Register routes

fastify.register(carsRoutes, { prefix: "/cars" });

export default fastify;
