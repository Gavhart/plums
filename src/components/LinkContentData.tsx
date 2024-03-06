import React from "react";
import { getLinkContent } from "@/lib/queries/linkNotes";

const LinkContentData = async ({ noteId }: { noteId: string }) => {
  const linkContent = await getLinkContent(noteId);
  if (!linkContent) {
    return;
  }
  return (
    <div>
      [link content]
      <p>{linkContent.title}</p>
      <p>{linkContent.url}</p>
    </div>
  );
};

export default LinkContentData;
