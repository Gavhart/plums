import React from "react";
import { getImageContent } from "@/lib/queries/imageNotes";

const ImageContentData = async ({ noteId }: { noteId: string }) => {
  const imageContent = await getImageContent(noteId);
  if (!imageContent) {
    return;
  }
  return (
    <div>
      <p>{imageContent.title}</p>
      <p>{imageContent.url}</p>
    </div>
  );
};

export default ImageContentData;
