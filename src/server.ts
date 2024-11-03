// src/index.ts
import app from "./app.js";

const startServer = async () => {
  try {
    await app.listen({ port: 4000 });
    console.log("Server listening on http://localhost:4000");
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

startServer();
