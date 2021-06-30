import db from "@/api/db"
import createSession from "@/api/createSession"
import hashPassword from "@/api/hashPassword"

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return
  }

  const {
    body: { email, password },
  } = req

  const passwordHash = hashPassword(password)
  const [user] = await db("users").where({ email, password_hash: passwordHash })

  if (!user) {
    return res.status(403).send("KO")
  }

  await createSession(req, res, user)

  res.send(user.id)
}

export default handler
