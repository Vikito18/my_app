import db from "@/api/db"
import checkAuth from "@/api/checkAuth"

const handler = async (req, res) => {
  const user = await checkAuth(req, res)

  if (!user) {
    return
  }

  if (req.method !== "POST") {
    return res.status(404).send("Not found")
  }

  const {
    query: { categoryId },
    body: { description, amount },
  } = req
  console.log(req.query)
  await db("expenditures").insert({
    description,
    amount,
    categoryId,
  })

  res.send("OK")
}

export default handler
