import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getSubscriberInviteCount } from '../functions/get-subscriber-invite-count'

export const getSubscriberInviteCountRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberId/ranking/count',
      {
        schema: {
          summary: 'Get subscriber invite count.',
          tags: ['referral'],
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async request => {
        const { subscriberId } = request.params

        const { count } = await getSubscriberInviteCount({ subscriberId })

        return { count }
      }
    )
  }
