import createSession from "@/api/createSession"
import db from "@/api/db"
import hashPassword from "@/api/hashPassword"

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return
  }

  const {
    body: { email, password },
  } = req

  const passwordHash = hashPassword(password)

  await db("users").insert({ email, password_hash: passwordHash })

  const [user] = await db("users").where({ email })

  await createSession(req, res, user)

  res.send(user.id)
}

export default handler
