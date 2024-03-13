import React from "react";
import { getImageContent } from "@/lib/queries/imageNotes";

const ImageContentData = async ({ noteId }: { noteId: string }) => {
  const imageContent = await getImageContent(noteId);
  if (!imageContent) {
    return;
  }
  return (
    <div>
      <img src={imageContent.url} alt={imageContent.title}/>
    </div>
  );
};

export default ImageContentData;
