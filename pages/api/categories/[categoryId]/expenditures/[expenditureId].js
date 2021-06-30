import db from "@/api/db"
import checkAuth from "@/api/checkAuth"

const handler = async (req, res) => {
  const user = await checkAuth(req, res)

  if (!user) {
    return
  }

  if (req.method !== "DELETE") {
    return res.status(404).send("Not found")
  }

  const {
    query: { expenditureId: id },
  } = req

  const [{ userId }] = await db("expenditures")
    .join("categories", "categories.id", "expenditures.categoryId")
    .where({ "expenditures.id": id, "categories.userId": user.id })

  if (user.id !== userId) {
    return res.status(401).send("Forbidden")
  }

  await db("expenditures").delete().where({ id })

  res.send("OK")
}

export default handler
