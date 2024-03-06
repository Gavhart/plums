import { db } from "../db";

export async function getLinkNotes(topicId: string) {
  return db.linkNote.findMany({
    where: {
      topicId,
    },
  });
}
