import { redis } from '../redis/client'

interface getSubscriberInviteClicksParams {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: getSubscriberInviteClicksParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)

  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
