"use server";

import { deleteTopic } from "@/lib/queries/topics";
import { redirect } from "next/navigation";
import {
  deleteImageNote,
  deleteLinkNote,
  deleteTextNote,
} from "@/lib/queries/deleteAllNotes";

export async function deleteTopicAction(folderId: string) {
  await deleteImageNote(folderId);
  await deleteLinkNote(folderId);
  await deleteTextNote(folderId);

  await deleteTopic(folderId);
  redirect("/topics");
}
