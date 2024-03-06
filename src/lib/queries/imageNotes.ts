import { db } from "../db";

export async function getImageNotes(topicId: string) {
  return db.imageNote.findMany({
    where: {
      topicId,
    },
  });
}

export async function getImageContent(noteId: string) {
  return db.imageNote.findFirst({
    where: {
      id: noteId,
    },
  });
}
