// src/index.ts
import app from "./app.js";
import {AppDataSource} from './helpers/db.js';
const startServer = async () => {
  try {
    await AppDataSource.initialize(); // Connect to Supabase database
    await app.listen({ port: 4000 });
    console.log("Server listening on http://localhost:4000");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

startServer();
