import { FastifyInstance } from 'fastify'
import { $ref } from '@/schemas/task'

const taskRoutes = async (server: FastifyInstance) => {
  server.post('/', {
    schema: {
      body: $ref('ItemRegisterInputSchema'),
      response:{
        201: { ...$ref('ItemSchema'), description: 'register completed' },
        tags: ['Item'],
      }
    },
    handler: async() => {}, // TODO
  })
}
export default taskRoutes;
