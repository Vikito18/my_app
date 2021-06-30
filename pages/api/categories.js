import db from "@/api/db"
import checkAuth from "@/api/checkAuth"

const handler = async (req, res) => {
  const user = await checkAuth(req, res)

  if (!user) {
    return
  }

  if (req.method === "POST") {
    const {
      body: { name, budget },
    } = req

    await db("categories").insert({
      name,
      budget,
      userId: user.id,
    })

    res.send("OK")

    return
  } else if (req.method === "GET") {
    const categories = await db("categories")
      .column({
        categoryId: "categories.id",
        categoryBudget: "categories.budget",
        categoryName: "categories.name",
        expenditureId: "expenditures.id",
        expenditureDescription: "expenditures.description",
        expenditureAmount: "expenditures.amount",
      })
      .where({ "categories.userId": user.id })
      .leftJoin("expenditures", "expenditures.categoryId", "categories.id")

    res.send(categories)

    return
  }

  res.status(404).send("not found")
}

export default handler
