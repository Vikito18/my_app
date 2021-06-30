import db from "@/api/db"
import checkAuth from "@/api/checkAuth"

const handler = async (req, res) => {
  const user = await checkAuth(req, res)

  if (!user) {
    return
  }

  if (req.method === "GET") {
    const {
      query: { categoryId: id },
    } = req

    const result = await db("categories")
      .column({
        categoryId: "categories.id",
        categoryBudget: "categories.budget",
        categoryName: "categories.name",
        expenditureId: "expenditures.id",
        expenditureDescription: "expenditures.description",
        expenditureAmount: "expenditures.amount",
      })
      .where({ "categories.userId": user.id })
      .where({ "categories.id": id })
      .leftJoin("expenditures", "expenditures.categoryId", "categories.id")

    res.send(result)

    return
  } else if (req.method === "DELETE") {
    const {
      query: { categoryId: id },
    } = req

    await db("categories").delete().where({ id, userId: user.id })

    res.send("OK")

    return
  }

  res.status(404).send("Not found")
}

export default handler
