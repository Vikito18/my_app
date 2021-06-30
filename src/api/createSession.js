import Cookies from "cookies"
import * as uuid from "uuid"

import redis from "@/api/redis"

const createSession = async (req, res, user) => {
  const sessionId = uuid.v4()
  const cookies = new Cookies(req, res)

  await redis.set(`session:${sessionId}`, user.id)
  cookies.set("session", sessionId, { httpOnly: true })
}

export default createSession
