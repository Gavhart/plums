"use server";

import { deleteTopic } from "@/lib/queries/topics";
import { redirect } from "next/navigation";
import {
  deleteImageNote,
  deleteImageNoteWithNoteId,
  deleteLinkNote,
  deleteLinkNoteWithNoteId,
  deleteTextNote,
  deleteTextNoteWithNoteId,
} from "@/lib/queries/deleteAllNotes";

export async function deleteTopicAction(folderId: string) {
  await deleteImageNote(folderId);
  await deleteLinkNote(folderId);
  await deleteTextNote(folderId);

  await deleteTopic(folderId);
  redirect("/topics");
}

export async function deleteNoteAction({
  noteId,
  folderId,
}: {
  noteId: string;
  folderId: string;
}) {
  await deleteImageNoteWithNoteId(noteId);
  await deleteLinkNoteWithNoteId(noteId);
  await deleteTextNoteWithNoteId(noteId);

  redirect(`/topics/${folderId}`);
}
