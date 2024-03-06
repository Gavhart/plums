import {db} from "../db"

export async function getNotes(topicId:string) {
    return db.textNote.findMany({
        where: {
            topicId
        }
    });
}
