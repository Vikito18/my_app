import checkAuth from "@/api/checkAuth"

const handler = async (req, res) => {
  const user = await checkAuth(req, res, 200, false)

  if (!user) {
    return
  }

  res.send(user.id)
}

export default handler
