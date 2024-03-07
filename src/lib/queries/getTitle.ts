import { db } from "../db";

export async function getTitle(id: string) {
  const textTitle = await db.textNote.findMany({
    where: {
      id,
    },
  });
  const imageTitle = await db.imageNote.findMany({
    where: {
      id,
    },
  });
  const linkTitle = await db.linkNote.findMany({
    where: {
      id,
    },
  });

  return { textTitle, imageTitle, linkTitle };
}
