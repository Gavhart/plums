import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const linkNoteQueries = await prisma.linkNote.findMany()
    console.log(linkNoteQueries);
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
