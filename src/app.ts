import fastify from 'fastify';

export const server = fastify({
  logger: true,
});

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const main = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server listening on port 3000');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
