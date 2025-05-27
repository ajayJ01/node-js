const Fastify = require('fastify');
const cors = require('@fastify/cors');

const app = Fastify({ logger: true });

app.register(cors, {
  origin: '*',
});

// Basic test route
app.get('/api/hello', async (request, reply) => {
  return { message: 'Hello from Fastify!' };
});

const start = async () => {
  try {
    await app.listen({ port: 5000 });
    console.log('Fastify server running at http://localhost:5000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
