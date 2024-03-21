import { db } from "../db";

interface NotesProps {
  id: string;
  title: string;
  content: string;
  url: string;
}

export async function getNotes({ id, title, content, url }: NotesProps) {
  const textTitle = await db.textNote.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      updatedAt: new Date().toISOString(),
    },
  });
  const imageTitle = await db.imageNote.update({
    where: {
      id,
    },
    data: {
      title,
      url,
      updatedAt: new Date().toISOString(),
    },
  });
  const linkTitle = await db.linkNote.update({
    where: {
      id,
    },
    data: {
      title,
      url,
      updatedAt: new Date().toISOString(),
    },
  });

  return { textTitle, imageTitle, linkTitle };
}

export async function updateNoteName(id: string, title: string) {
  await db.textNote.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });
}
