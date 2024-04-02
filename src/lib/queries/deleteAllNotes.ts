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

export async function deleteImageNoteWithNoteId(noteId: string) {
  const data = await db.imageNote.findUnique({
    where: {
      id: noteId,
    },
  });

  if (!data) {
    return "Data doesnt exist";
  }

  return db.imageNote.delete({
    where: {
      id: noteId,
    },
  });
}

export async function deleteLinkNoteWithNoteId(noteId: string) {
  const data = await db.linkNote.findUnique({
    where: {
      id: noteId,
    },
  });

  if (!data) {
    return "Data doesnt exist";
  }

  return db.linkNote.delete({
    where: {
      id: noteId,
    },
  });
}

export async function deleteTextNoteWithNoteId(noteId: string) {
  const data = await db.textNote.findUnique({
    where: {
      id: noteId,
    },
  });

  if (!data) {
    return "Data doesnt exist";
  }

  return db.textNote.delete({
    where: {
      id: noteId,
    },
  });
}
