import { db } from "../db";

export async function getImageNotes(topicId: string) {
  return db.imageNote.findMany({
    where: {
      topicId,
    },
  });
}
