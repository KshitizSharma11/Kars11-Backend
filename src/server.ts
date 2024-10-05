import Fastify from 'fastify';
const server = Fastify();

server.get('/', async (req, res) => {
    return { message: 'Hello, Fastify with TypeScript and ESM!' };
  });
  
  const start = async () => {
    try {
      await server.listen({ port: 4000 });
      console.log(`Server is running at http://localhost:4000`);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };
  
  start();
  