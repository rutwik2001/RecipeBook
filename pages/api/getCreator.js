import prisma from '../../lib/prisma'

// GET /api/filterPosts?searchString=:searchString
export default async function handle(req, res) {
  const address = req.query.address
  


  
  var creator = await prisma.Creator.findMany({
  where: {
    Address: address
  }
})

if(creator == null){
  creator = [{}]
} 




res.json(creator)
  
}
