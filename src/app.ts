import fastify from 'fastify';
import swagger from '@fastify/swagger'
import { withRefResolver } from 'fastify-zod'
import rootRoutes from './routes/root'
import taskRoutes from './routes/tasks'
import { itemSchemas } from './schemas/task'

export const server = fastify({
  logger: true,
});


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const main = async () => {
  itemSchemas.forEach(schema => {
    server.addSchema(schema)
  })

  server.register(
    swagger,
    withRefResolver({
      routePrefix: '/docs',
      exposeRoute: true,
      staticCSP: true,
      openapi:{
        info: {
          title: 'todo task list api schema',
          description: 'description',
          version: '0.0.1',
        }
      }
    })
  )

  server.register(rootRoutes, { prefix: '/' })
  server.register(taskRoutes, { prefix: '/tasks' })

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
