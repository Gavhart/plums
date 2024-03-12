import React from "react";
import { getLinkContent } from "@/lib/queries/linkNotes";

const LinkContentData = async ({ noteId }: { noteId: string }) => {
  const linkContent = await getLinkContent(noteId);
  if (!linkContent) {
    return;
  }
  return (
    <div>
      <a href={linkContent.url} target="_blank" rel="noopener noreferrer">
  {linkContent.title}
</a>
    </div>
  );
};

export default LinkContentData;
