import db from "@/api/db"
import redis from "@/api/redis"

const checkAuth = async (req, res, statusCode, status) => {
  const { session: sessionId } = req.cookies

  if (!sessionId) {
    res.status(statusCode || 401).send(status ?? "Forbidden")

    return false
  }

  const userId = await redis.get(`session:${sessionId}`)
  const [user] = await db("users").where({ id: userId })

  if (!user) {
    res.status(statusCode || 401).send(status ?? "Forbidden")

    return false
  }

  return user
}

export default checkAuth
