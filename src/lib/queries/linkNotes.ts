import { db } from "../db";

export async function getLinkNotes(topicId: string) {
  return db.linkNote.findMany({
    where: {
      topicId,
    },
  });
}

export async function getLinkContent(noteId: string) {
  return db.linkNote.findFirst({
    where: {
      id: noteId,
    },
  });
}
