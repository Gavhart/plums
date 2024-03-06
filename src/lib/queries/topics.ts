import {db} from "../db"

export async function getTopics() {
    return db.topic.findMany();
}
