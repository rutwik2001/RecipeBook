import prisma from '../../lib/prisma'

// GET /api/filterPosts?searchString=:searchString
export default async function handle(req, res) {
  const { likes, count } = req.body
  const result = await prisma.likes.create({
    data: {
      likes: likes,
      tokenID: count,
      likedBy: []
    },
  })
  res.json(result)
}