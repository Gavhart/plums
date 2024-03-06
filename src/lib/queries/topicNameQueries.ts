import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const displayTopic = await prisma.topic.findMany()
    console.log(displayTopic);
}

main()
    .catch(async (e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
