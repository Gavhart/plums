import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const imageNoteQueries = await prisma.imageNote.findMany()
    console.log(imageNoteQueries);
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
