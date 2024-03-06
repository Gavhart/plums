import { db } from "../db";

export async function getNotes(topicId: string) {
  return db.textNote.findMany({
    where: {
      topicId,
    },
  });
}

export async function getNoteContent(noteId: string) {
  return db.textNote.findFirst({
    where: {
      id: noteId,
    },
  });
}
