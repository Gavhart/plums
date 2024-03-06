import React from "react";
import { getNoteContent } from "@/lib/queries/textNotes";

const TextContentData = async ({ noteId }: { noteId: string }) => {
  const noteContent = await getNoteContent(noteId);
  if (!noteContent) {
    return;
  }
  return (
    <div>
      <p>{noteContent.content}</p>
    </div>
  );
};

export default TextContentData;
