import prisma from '../../lib/prisma'

// GET /api/filterPosts?searchString=:searchString
export default async function handle(req, res) {
  const { name, address, email, phone } = req.body
  const result = await prisma.Creator.create({
    data: {
      Name: name,
      Address: address,
      Email: email,
      Phone: phone
    },
  })
  res.json(result)
}