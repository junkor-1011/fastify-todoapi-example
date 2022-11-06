import { FastifyInstance } from 'fastify'

const routes = async (server: FastifyInstance)=> {
  server.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
}
export default routes
