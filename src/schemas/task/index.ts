import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

export const ItemSchema = z.object({
  title: z.string().min(1).max(50).describe('abstract of the item'),
  detail: z.string().max(200).optional().describe('detail of the item'),
  priority: z.number().min(1).max(10).step(1).describe('priority of the item'),
  timelimit: z.date().describe('time limit to do the item'),
  isDone: z.boolean().default(false).describe('which the task item is done'),
  createdAt: z.date().describe('datetime the item created'),
  updatedAt: z.date().describe('datetime the item updated'),
  id: z.string().uuid().describe('id of the item'),
})
export type ItemType = z.infer<typeof ItemSchema>

export const ItemRegisterInputSchema = ItemSchema.omit({
  isDone: true,
  createdAt: true,
  updatedAt: true,
  id: true,
})
export type ItemRegisterInputType = z.infer<typeof ItemRegisterInputSchema>

export const { schemas: itemSchemas, $ref } = buildJsonSchemas(
  {
    ItemSchema,
    ItemRegisterInputSchema,
  },
  {
    $id: 'itemSchemas',
  }
)
