import Redis from "ioredis"
export default new Redis({
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  db: process.env.REDIS_DB,
})