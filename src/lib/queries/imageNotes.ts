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

export async function createImageNote(
  folderId: string,
  title: string,
  url: string,
) {
  return db.imageNote.create({
    data: {
      topicId: folderId,
      title,
      url,
      createdAt: new Date().toISOString(),
    },
  });
}
