import { db } from "../db";

export async function deleteImageNote(topicId: string) {
  return db.imageNote.deleteMany({
    where: {
      topicId,
    },
  });
}

export async function deleteLinkNote(topicId: string) {
  return db.linkNote.deleteMany({
    where: {
      topicId,
    },
  });
}

export async function deleteTextNote(topicId: string) {
  return db.textNote.deleteMany({
    where: {
      topicId,
    },
  });
}
