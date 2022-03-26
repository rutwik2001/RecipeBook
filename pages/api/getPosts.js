import prisma from '../../lib/prisma'

// GET /api/filterPosts?searchString=:searchString
export default async function handle(req, res) {
  
  
  const postCount = await prisma.likes.count();




  res.json(postCount)
}