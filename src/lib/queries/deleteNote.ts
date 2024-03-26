import { db } from "../db";

export async function deleteNote(id: string) {
  try {
    const results = await Promise.all([
      db.textNote.delete({ where: { id } }),
      db.imageNote.delete({ where: { id } }),
      db.linkNote.delete({ where: { id } }),
    ]);
    
    return { textNote: results[0], imageNote: results[1], linkNote: results[2] };
  } catch (error) {

    throw error;
  }
}
